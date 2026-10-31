import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/esdcybc0c.css';
import '../../css/r/rcanfy94i.css';
import '../../css/c/ccdl80bco.css';
import '../../css/z/z9dblmyth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="esdcybc0c wm-shadow"/><path class="rcanfy94i wm-shadow"/><path class="ccdl80bco"/><path class="z9dblmyth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:scissors"} {...others} />);
}

export default Component;
