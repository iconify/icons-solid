import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3tpdrb6a.css';
import '../../css/t/tt7xj_b0r.css';

const viewBox = {"width":98,"height":90};
const content = `<defs><symbol id="SVGjLWOBdJI" viewBox="0 0 98 90"><path class="z3tpdrb6a"/><path class="tt7xj_b0r"/></symbol></defs><use width="98" height="90" href="#SVGjLWOBdJI"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:zapal"} {...others} />);
}

export default Component;
