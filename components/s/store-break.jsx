import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pbwszacym.css';
import '../../css/s/s1uxt9bdb.css';
import '../../css/p/pm9h7pbes.css';
import '../../css/q/qd6ov3byx.css';
import '../../css/b/b7p5azb1h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pbwszacym"/><path class="s1uxt9bdb"/><path class="pm9h7pbes"/><path clip-rule="evenodd" class="qd6ov3byx"/><path class="b7p5azb1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:store-break"} {...others} />);
}

export default Component;
