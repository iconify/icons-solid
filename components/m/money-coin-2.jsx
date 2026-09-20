import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/f/fe_wc6ksk.css';
import '../../css/n/nkwn8kc2v.css';
import '../../css/n/n-ogr3pwq.css';
import '../../css/o/o9of61mvd.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="fe_wc6ksk"/><path class="nkwn8kc2v"/><path class="n-ogr3pwq"/><path class="o9of61mvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:money-coin-2"} {...others} />);
}

export default Component;
