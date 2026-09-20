import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/g/gc2zydb-d.css';
import '../../css/m/mp6j8dbhb.css';
import '../../css/z/zak4uuugf.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="gc2zydb-d"/><path class="mp6j8dbhb"/><path class="zak4uuugf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:eiffel-tower-duo"} {...others} />);
}

export default Component;
