import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gy19acbhk.css';
import '../../css/n/n2g2n08zl.css';
import '../../css/b/bm9d2qtrr.css';
import '../../css/a/auaebfafr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gy19acbhk"/><path class="n2g2n08zl"/><path class="bm9d2qtrr"/><path class="auaebfafr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:payment-cash-out-3"} {...others} />);
}

export default Component;
