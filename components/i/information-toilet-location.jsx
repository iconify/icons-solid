import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/p/p9l_113wf.css';
import '../../css/g/gga3mtbou.css';
import '../../css/g/gey-v8gfc.css';
import '../../css/n/nmq2vw_pw.css';
import '../../css/e/elb823bym.css';
import '../../css/i/in8prhb9m.css';
import '../../css/q/qteqq0b-l.css';
import '../../css/l/lefw5wshd.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="p9l_113wf"/><path class="gga3mtbou"/><path class="gey-v8gfc"/><path class="nmq2vw_pw"/><path class="elb823bym"/><path class="in8prhb9m"/><path class="qteqq0b-l"/><path class="lefw5wshd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:information-toilet-location"} {...others} />);
}

export default Component;
