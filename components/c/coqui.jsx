import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zukpscc6p.css';
import '../../css/y/ymbtikijh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="zukpscc6p"/><path class="ymbtikijh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:coqui"} {...others} />);
}

export default Component;
