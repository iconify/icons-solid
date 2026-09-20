import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg6hbfl5t.css';
import '../../css/o/o7-xjtbae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tg6hbfl5t"/><path clip-rule="evenodd" class="o7-xjtbae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:badge-decagram-percent"} {...others} />);
}

export default Component;
