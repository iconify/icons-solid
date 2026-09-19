import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_vvnyb1r.css';
import '../../css/q/q-th0ygww.css';
import '../../css/n/n5hd3rctn.css';
import '../../css/j/j507dht9b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="x_vvnyb1r"/><path class="q-th0ygww"/><path class="n5hd3rctn"/><path class="j507dht9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:album"} {...others} />);
}

export default Component;
