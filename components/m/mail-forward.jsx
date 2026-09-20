import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ar3gh-b_e.css';
import '../../css/h/h-rbj_bgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ar3gh-b_e"/><path class="h-rbj_bgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-forward"} {...others} />);
}

export default Component;
