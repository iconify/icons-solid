import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xfa7lub4k.css';
import '../../css/c/c-6_08brp.css';
import '../../css/e/e5fzxreem.css';
import '../../css/m/mzhrmtosr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xfa7lub4k"/><path class="c-6_08brp"/><path clip-rule="evenodd" class="e5fzxreem"/><path class="mzhrmtosr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sort-alpha-up-outline"} {...others} />);
}

export default Component;
