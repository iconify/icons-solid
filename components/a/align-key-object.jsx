import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f4lfqelzl.css';
import '../../css/v/vncdglbxf.css';
import '../../css/d/dj6hz0ywu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f4lfqelzl"/><path class="vncdglbxf"/><path class="dj6hz0ywu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:align-key-object"} {...others} />);
}

export default Component;
