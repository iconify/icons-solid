import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lpitmabnk.css';
import '../../css/o/or0ae1ttt.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="lpitmabnk"/><path class="or0ae1ttt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:wifi-poor"} {...others} />);
}

export default Component;
