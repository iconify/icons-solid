import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzwgnzb9h.css';
import '../../css/k/k-khy6r6b.css';
import '../../css/z/z04drlb1l.css';
import '../../css/q/qw2l4vbgr.css';
import '../../css/u/uuqfk7b7j.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="fzwgnzb9h"/><path class="k-khy6r6b"/><g class="z04drlb1l"><path class="qw2l4vbgr"/><path class="uuqfk7b7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:power-symbol"} {...others} />);
}

export default Component;
