import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm9_3bbqh.css';
import '../../css/y/y-5x8pjfu.css';
import '../../css/f/fm6tes6gl.css';
import '../../css/b/bqublpl9a.css';

const viewBox = {"width":64,"height":64};
const content = `<g clip-rule="evenodd" class="nm9_3bbqh"><path class="y-5x8pjfu"/><path class="fm6tes6gl"/><path class="bqublpl9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:zen-browser-dark"} {...others} />);
}

export default Component;
