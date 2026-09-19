import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8xajdb2x.css';
import '../../css/u/uj5gecbfk.css';
import '../../css/w/w_lxti6jb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="r8xajdb2x"/><path class="uj5gecbfk"/><path class="w_lxti6jb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:file-remove-1-duo"} {...others} />);
}

export default Component;
