import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v30g24bew.css';
import '../../css/u/uuj-dyb-z.css';
import '../../css/s/sna5cobxw.css';
import '../../css/w/w0r9meb9z.css';
import '../../css/o/or0j-mbfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v30g24bew"/><path class="uuj-dyb-z"/><path class="sna5cobxw"/><path class="w0r9meb9z"/><path class="or0j-mbfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:percent-rotate-out"} {...others} />);
}

export default Component;
