import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg0u5tbyf.css';
import '../../css/q/qnjki0hlv.css';
import '../../css/j/jf1_jq5jw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zg0u5tbyf"/><path class="qnjki0hlv"/><path class="jf1_jq5jw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:laser-level-20"} {...others} />);
}

export default Component;
