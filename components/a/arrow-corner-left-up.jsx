import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tm27laccp.css';
import '../../css/w/wx4recbaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tm27laccp"/><path class="wx4recbaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-corner-left-up"} {...others} />);
}

export default Component;
