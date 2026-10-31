import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/h4rgspq6f.css';
import '../../css/r/ruvhuqbko.css';
import '../../css/q/qesl3ftiz.css';
import '../../css/i/ieced1b-r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="h4rgspq6f"/><path class="ruvhuqbko"/><path class="qesl3ftiz wm-k"/><path class="ieced1b-r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:diya"} {...others} />);
}

export default Component;
