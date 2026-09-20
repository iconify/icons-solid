import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j5sh7tbio.css';
import '../../css/y/y0i_f4b-g.css';
import '../../css/p/ps6y6bmhe.css';
import '../../css/a/a36pgosad.css';
import '../../css/y/yzlhu9uue.css';
import '../../css/u/u6ro41pwf.css';
import '../../css/h/hilzp5wle.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j5sh7tbio"/><path class="y0i_f4b-g"/><path class="ps6y6bmhe"/><path class="a36pgosad"/><path class="yzlhu9uue"/><path class="u6ro41pwf"/><path class="hilzp5wle"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-3-broken"} {...others} />);
}

export default Component;
