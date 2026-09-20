import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ausm4qbbt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ausm4qbbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-unlock-bold"} {...others} />);
}

export default Component;
