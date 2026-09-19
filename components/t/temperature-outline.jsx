import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ar-s6cb1i.css';
import '../../css/l/lruiq3bxa.css';
import '../../css/w/wdiux7bes.css';
import '../../css/r/r4byq35fv.css';
import '../../css/m/mlq6x5bsu.css';
import '../../css/l/l320lnnvt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ar-s6cb1i"/><path class="lruiq3bxa"/><path clip-rule="evenodd" class="wdiux7bes"/><path clip-rule="evenodd" class="r4byq35fv"/><path class="mlq6x5bsu"/><path clip-rule="evenodd" class="l320lnnvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:temperature-outline"} {...others} />);
}

export default Component;
