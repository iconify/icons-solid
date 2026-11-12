import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prptthbtt.css';
import '../../css/z/zo-mdg_qh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="prptthbtt"/><path class="zo-mdg_qh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:teslamate"} {...others} />);
}

export default Component;
