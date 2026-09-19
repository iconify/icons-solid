import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/z/zeb2u5bnn.css';
import '../../css/d/da5c6acvy.css';
import '../../css/r/rfi36zaxv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="zeb2u5bnn"/><path class="da5c6acvy"/><path class="rfi36zaxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mall-bag"} {...others} />);
}

export default Component;
