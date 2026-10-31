import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/eorhoxbnv.css';
import '../../css/b/b9pn4z2le.css';
import '../../css/y/ytvc4wbpy.css';
import '../../css/n/ny0nj65up.css';
import '../../css/t/t26vzccwj.css';
import '../../css/d/dd1zg1bdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="eorhoxbnv wm-shadow"/><path class="b9pn4z2le wm-shadow"/><path class="ytvc4wbpy"/><path class="ny0nj65up"/><path class="t26vzccwj"/><path class="dd1zg1bdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:shield-user"} {...others} />);
}

export default Component;
