import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pe_fosdck.css';
import '../../css/b/bfomtzb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pe_fosdck"/><path class="bfomtzb3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:image-check"} {...others} />);
}

export default Component;
