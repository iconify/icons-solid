import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-13f8bxy.css';
import '../../css/e/eg_ob1d5w.css';
import '../../css/x/x19qmcbwy.css';
import '../../css/z/zvu0sqbpp.css';
import '../../css/t/t8q63ebnn.css';
import '../../css/j/jtr-1064a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a-13f8bxy"/><path class="eg_ob1d5w"/><path class="x19qmcbwy"/><path class="zvu0sqbpp"/><path class="t8q63ebnn"/><path class="jtr-1064a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:car-dashboard-speed"} {...others} />);
}

export default Component;
