import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lbvvl37az.css';
import '../../css/b/bzo7e1msp.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="lbvvl37az"/><path class="bzo7e1msp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:call-forward"} {...others} />);
}

export default Component;
