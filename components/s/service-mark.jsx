import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/h/h8lnpab8v.css';
import '../../css/r/rtlckh5of.css';
import '../../css/n/nyrgrjzlh.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/w/wkcl1kx5a.css';
import '../../css/r/ria0jyqvu.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="n1mjunbsu"><ellipse transform="rotate(-86.78 21.496 30.418)" class="h8lnpab8v"/><ellipse transform="rotate(-86.78 21.326 41.742)" class="rtlckh5of"/><rect class="nyrgrjzlh"/></g><g class="rpvb-o6bq"><path class="wkcl1kx5a"/><path class="ria0jyqvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:service-mark"} {...others} />);
}

export default Component;
