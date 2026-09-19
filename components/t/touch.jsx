import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/effisz2bi.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/abg9j_5ki.css';
import '../../css/g/gg1wrldfl.css';
import '../../css/d/doofb47ul.css';
import '../../css/x/xn2mwbbpa.css';
import '../../css/s/sz6kkh9ba.css';
import '../../css/v/vncdj5bvt.css';

const viewBox = {"width":100,"height":100};
const content = `<clipPath id="SVGlgah6cRj"><circle class="effisz2bi"/></clipPath><g clip-path="url(#SVGlgah6cRj)" clip-rule="evenodd" class="d2kvgvbvc"><path class="abg9j_5ki"/><path class="gg1wrldfl"/><path class="doofb47ul"/><path class="xn2mwbbpa"/><path class="sz6kkh9ba"/><path class="vncdj5bvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:touch"} {...others} />);
}

export default Component;
