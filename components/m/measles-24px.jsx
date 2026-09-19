import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eo_p0ebow.css';
import '../../css/v/vagu0vbgp.css';
import '../../css/m/m5ap_-bph.css';
import '../../css/k/kxek-tbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eo_p0ebow"/><path class="vagu0vbgp"/><path clip-rule="evenodd" class="m5ap_-bph"/><path class="kxek-tbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:measles-24px"} {...others} />);
}

export default Component;
