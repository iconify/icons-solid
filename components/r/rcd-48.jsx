import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp-8xbcar.css';
import '../../css/l/luu7bn_8g.css';
import '../../css/b/btws7t3pu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mp-8xbcar"/><path class="luu7bn_8g"/><path class="btws7t3pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rcd-48"} {...others} />);
}

export default Component;
