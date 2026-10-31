import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3ohnsioe.css';
import '../../css/d/dthut7b2h.css';
import '../../css/v/vzmvtld9o.css';
import '../../css/w/w8sxocbax.css';
import '../../css/d/d3pcg8bgn.css';
import '../../css/n/nspvkkbfx.css';
import '../../css/r/rdigmor0q.css';
import '../../css/c/c_aa9kfhz.css';
import '../../css/w/wwmou4blk.css';
import '../../css/v/vczxwzbkq.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="a3ohnsioe"/><path clip-rule="evenodd" class="dthut7b2h"/><path clip-rule="evenodd" class="vzmvtld9o"/><path class="w8sxocbax"/><path clip-rule="evenodd" class="d3pcg8bgn"/><path clip-rule="evenodd" class="nspvkkbfx"/><path clip-rule="evenodd" class="rdigmor0q"/><path clip-rule="evenodd" class="c_aa9kfhz"/><path clip-rule="evenodd" class="wwmou4blk"/><path clip-rule="evenodd" class="vczxwzbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:awkward-look-monkey-hand-drawn"} {...others} />);
}

export default Component;
