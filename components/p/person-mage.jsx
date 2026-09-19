import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vurl2xkvg.css';
import '../../css/o/o_5okgbho.css';
import '../../css/z/zoz1gjbxu.css';
import '../../css/i/idz62rlyl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="vurl2xkvg"/><path class="o_5okgbho"/><path class="zoz1gjbxu"/><path class="idz62rlyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-mage"} {...others} />);
}

export default Component;
