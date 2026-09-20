import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7-56lggy.css';
import '../../css/i/i2iqmwb5u.css';
import '../../css/q/quwjaj2hv.css';
import '../../css/e/ebvh0ix9f.css';
import '../../css/i/i2uk179cg.css';
import '../../css/w/wgd3e6iex.css';
import '../../css/w/wtqkk442y.css';
import '../../css/o/o223pknxn.css';
import '../../css/n/n0wia5x_d.css';
import '../../css/f/fwr2ktotd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c7-56lggy"/><path class="i2iqmwb5u"/><path class="quwjaj2hv"/><path class="ebvh0ix9f"/><path class="i2uk179cg"/><path class="wgd3e6iex"/><path class="wtqkk442y"/><path class="o223pknxn"/><path class="n0wia5x_d"/><path class="fwr2ktotd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:3d-printer"} {...others} />);
}

export default Component;
