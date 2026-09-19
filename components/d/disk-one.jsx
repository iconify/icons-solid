import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/g96sazbxl.css';
import '../../css/q/qoebb6b-x.css';
import '../../css/f/fxsft62au.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};
const content = `<defs><mask id="SVGIVSQUd5t"><g class="v3_i3wktz"><path class="g96sazbxl"/><path class="qoebb6b-x"/><path class="fxsft62au"/></g></mask></defs><path mask="url(#SVGIVSQUd5t)" class="maw6_-12u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:disk-one"} {...others} />);
}

export default Component;
