import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebdkh4bgw.css';
import '../../css/s/syxl9mb3z.css';
import '../../css/w/wk2dzgbah.css';
import '../../css/w/w-o1i1lbw.css';
import '../../css/b/b-2b-wc7d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ebdkh4bgw"/><path class="syxl9mb3z"/><path class="wk2dzgbah"/><path class="w-o1i1lbw"/><path class="b-2b-wc7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-air-48"} {...others} />);
}

export default Component;
