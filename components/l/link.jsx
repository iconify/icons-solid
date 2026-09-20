import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iq6sxrv4u.css';
import '../../css/i/ig9k__4so.css';
import '../../css/d/d2lohgbhq.css';

const viewBox = {"width":200,"height":200};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGrKx2Cdxf)"><path class="iq6sxrv4u"/><path class="ig9k__4so"/></g><defs><clipPath id="SVGrKx2Cdxf"><path class="d2lohgbhq"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:link"} {...others} />);
}

export default Component;
