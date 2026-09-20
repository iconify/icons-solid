import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/n/n_c2fy4au.css';
import '../../css/c/ce899lqho.css';
import '../../css/z/z5a6jybuz.css';
import '../../css/s/swgts-b0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="n_c2fy4au"/><path class="ce899lqho"/><path class="z5a6jybuz"/><path class="swgts-b0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:bill-4"} {...others} />);
}

export default Component;
