import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ejvinw4wz.css';
import '../../css/g/gafqopb8p.css';
import '../../css/p/pqaox6bqq.css';
import '../../css/j/j4t4qwphb.css';
import '../../css/d/dr0xmacsw.css';
import '../../css/u/uv1ps_bml.css';
import '../../css/y/yazxk0b-x.css';
import '../../css/o/o55t8wbug.css';
import '../../css/z/zgf9o0g-u.css';
import '../../css/n/nlyklvb9c.css';
import '../../css/i/i0fisrmsq.css';
import '../../css/b/b8weawbky.css';
import '../../css/z/z0r053b2a.css';
import '../../css/j/j13xxwb0s.css';
import '../../css/p/pzis_i7da.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ejvinw4wz"/><path class="gafqopb8p"/><path class="pqaox6bqq"/><path class="j4t4qwphb"/><path class="dr0xmacsw"/><path class="uv1ps_bml"/><path class="yazxk0b-x"/><path class="o55t8wbug"/><path class="zgf9o0g-u"/><path class="nlyklvb9c"/><path class="i0fisrmsq"/><path class="b8weawbky"/><path class="z0r053b2a"/><path class="j13xxwb0s"/><path class="pzis_i7da"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-guard-medium"} {...others} />);
}

export default Component;
