import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-vufcb5d.css';
import '../../css/k/k1m1o24us.css';
import '../../css/v/vocvojbdw.css';
import '../../css/a/ar9njl9ac.css';
import '../../css/r/r8uj9wbtp.css';
import '../../css/h/hc6zy2bby.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i-vufcb5d"/><path class="k1m1o24us"/><path class="vocvojbdw"/><path clip-rule="evenodd" class="ar9njl9ac"/><path class="r8uj9wbtp"/><path class="hc6zy2bby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ship-water-outline"} {...others} />);
}

export default Component;
