import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6btxnbno.css';
import '../../css/o/o8-mnxbkx.css';
import '../../css/g/gv6b2xb3v.css';

const viewBox = {"width":24.9,"height":28};
const content = `<g class="m6btxnbno"><path class="o8-mnxbkx"/><path class="gv6b2xb3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sonojs"} {...others} />);
}

export default Component;
