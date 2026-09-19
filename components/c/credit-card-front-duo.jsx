import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vlx_mbcyg.css';
import '../../css/b/bo5ct3btu.css';
import '../../css/g/gch2qubat.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vlx_mbcyg"/><path class="bo5ct3btu"/><path class="gch2qubat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:credit-card-front-duo"} {...others} />);
}

export default Component;
