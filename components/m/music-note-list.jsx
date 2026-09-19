import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w1kx2epvq.css';
import '../../css/v/vyh9iac7o.css';
import '../../css/d/d5jhbmbzf.css';
import '../../css/u/u6iipyb0r.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="w1kx2epvq"/><path class="vyh9iac7o"/><path class="d5jhbmbzf"/><path class="u6iipyb0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:music-note-list"} {...others} />);
}

export default Component;
