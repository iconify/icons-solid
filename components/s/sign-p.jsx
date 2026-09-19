import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ixs4hyb3p.css';
import '../../css/l/lhvxlbcvy.css';
import '../../css/k/k0qhhsbyj.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="ixs4hyb3p"/><path class="lhvxlbcvy"/><path class="k0qhhsbyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:sign-p"} {...others} />);
}

export default Component;
