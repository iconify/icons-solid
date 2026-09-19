import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgh9uxbqo.css';
import '../../css/q/qk7nzacnk.css';
import '../../css/f/f7f8lzgft.css';
import '../../css/k/keie_-blj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="pgh9uxbqo"/><path class="qk7nzacnk"/><path class="f7f8lzgft"/><path class="keie_-blj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sort-alpha-up"} {...others} />);
}

export default Component;
