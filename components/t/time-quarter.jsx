import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bql_2u4-a.css';
import '../../css/u/uwprsn25p.css';
import '../../css/d/d8sy1ipse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bql_2u4-a"/><path class="uwprsn25p"/><path class="d8sy1ipse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:time-quarter"} {...others} />);
}

export default Component;
