import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0v3-tbgp.css';
import '../../css/k/kqur-5zpk.css';
import '../../css/g/gl98-fbjn.css';
import '../../css/q/qrdvunbys.css';
import '../../css/s/s-x9sz5uy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y0v3-tbgp"/><path class="kqur-5zpk"/><path clip-rule="evenodd" class="gl98-fbjn"/><path class="qrdvunbys"/><path class="s-x9sz5uy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:temperature-cold"} {...others} />);
}

export default Component;
