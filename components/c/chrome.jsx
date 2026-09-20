import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pytzghb1v.css';
import '../../css/l/lnlkl5tbt.css';
import '../../css/s/strh0bcug.css';
import '../../css/s/sn-_s4y-h.css';
import '../../css/p/pcjckvbvh.css';

const viewBox = {"width":190.5,"height":190.5};
const content = `<path class="pytzghb1v"/><path class="lnlkl5tbt"/><path class="strh0bcug"/><path class="sn-_s4y-h"/><path class="pcjckvbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:chrome"} {...others} />);
}

export default Component;
