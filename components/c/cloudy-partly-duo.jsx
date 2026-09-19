import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jvw3jkjnb.css';
import '../../css/n/nnd8v_bmg.css';
import '../../css/g/gv-lolbnd.css';
import '../../css/r/ropa7ebap.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="jvw3jkjnb"/><path class="nnd8v_bmg"/><path class="gv-lolbnd"/><path class="ropa7ebap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cloudy-partly-duo"} {...others} />);
}

export default Component;
