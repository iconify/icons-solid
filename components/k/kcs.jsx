import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hf8lpkb0m.css';
import '../../css/y/ym62twrfg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="hf8lpkb0m"/><path class="ym62twrfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:kcs"} {...others} />);
}

export default Component;
