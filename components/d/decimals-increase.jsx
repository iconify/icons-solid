import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zmto0objo.css';
import '../../css/t/te_tth4ee.css';
import '../../css/g/gd3-ymw3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zmto0objo"/><path class="te_tth4ee"/><path class="gd3-ymw3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:decimals-increase"} {...others} />);
}

export default Component;
