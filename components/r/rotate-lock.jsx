import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/kk0lp9bsa.css';
import '../../css/n/nxievab5i.css';
import '../../css/f/fnubyoobq.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="kk0lp9bsa"/><path class="nxievab5i"/><path class="fnubyoobq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:rotate-lock"} {...others} />);
}

export default Component;
