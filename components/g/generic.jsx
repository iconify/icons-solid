import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c41awf-_v.css';
import '../../css/g/g5ls9fbxi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="c41awf-_v"/><path class="g5ls9fbxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:generic"} {...others} />);
}

export default Component;
