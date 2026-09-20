import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hme_mebaw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hme_mebaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:microphone-cancelled"} {...others} />);
}

export default Component;
