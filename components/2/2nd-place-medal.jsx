import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ie17f1jot.css';
import '../../css/v/vrn1zheyn.css';
import '../../css/v/vrpbmw-0a.css';
import '../../css/g/gvsavvb4f.css';
import '../../css/a/axd83acze.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ie17f1jot"/><path class="vrn1zheyn"/><path class="vrpbmw-0a"/><path class="gvsavvb4f"/><path class="axd83acze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:2nd-place-medal"} {...others} />);
}

export default Component;
