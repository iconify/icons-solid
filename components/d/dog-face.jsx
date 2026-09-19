import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbw92nqef.css';
import '../../css/s/s8zn4lb8f.css';
import '../../css/l/lvgy32b4t.css';
import '../../css/a/a567h385m.css';
import '../../css/t/tnxf2bc6n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qbw92nqef"/><path class="s8zn4lb8f"/><path class="lvgy32b4t"/><path class="a567h385m"/><path class="tnxf2bc6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:dog-face"} {...others} />);
}

export default Component;
