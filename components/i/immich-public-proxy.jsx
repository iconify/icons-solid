import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2w31yeuo.css';
import '../../css/s/spxjt7bib.css';
import '../../css/o/oe550frae.css';
import '../../css/d/dzpywybjz.css';
import '../../css/e/e2e-xyzct.css';
import '../../css/s/s0223fb9m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w2w31yeuo"/><path class="spxjt7bib"/><path class="oe550frae"/><path class="dzpywybjz"/><path class="e2e-xyzct"/><path class="s0223fb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:immich-public-proxy"} {...others} />);
}

export default Component;
