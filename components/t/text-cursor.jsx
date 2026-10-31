import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bq46uowvk.css';
import '../../css/f/f5zdz58kw.css';
import '../../css/y/yx6qcnh6h.css';
import '../../css/w/wq8zqtbdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bq46uowvk wm-shadow"/><path class="f5zdz58kw wm-shadow"/><path class="yx6qcnh6h"/><path class="wq8zqtbdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:text-cursor"} {...others} />);
}

export default Component;
