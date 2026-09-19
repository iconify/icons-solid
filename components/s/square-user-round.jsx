import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ief88gblg.css';
import '../../css/d/d1xlaxbzx.css';
import '../../css/l/l00awn5kw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ief88gblg"/><path class="d1xlaxbzx"/><path class="l00awn5kw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-user-round"} {...others} />);
}

export default Component;
