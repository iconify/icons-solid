import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpwa7ebxs.css';
import '../../css/w/wodp_zbmf.css';
import '../../css/w/wr5bbib0e.css';
import '../../css/d/d-6izk9_s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cpwa7ebxs"/><path class="wodp_zbmf"/><path class="wr5bbib0e"/><path class="d-6izk9_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:power-enterprise-pools-metered-capacity-integration"} {...others} />);
}

export default Component;
