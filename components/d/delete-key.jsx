import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mzyt90bzr.css';
import '../../css/g/gv8sbzb8h.css';
import '../../css/j/j_dspgbkq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="mzyt90bzr"/><path class="gv8sbzb8h"/><path class="j_dspgbkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:delete-key"} {...others} />);
}

export default Component;
