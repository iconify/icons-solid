import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8mp0wbzm.css';
import '../../css/w/wkylhn4dt.css';
import '../../css/p/pvx_7s2bb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m8mp0wbzm"/><path class="wkylhn4dt"/><path class="pvx_7s2bb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fireplace-48"} {...others} />);
}

export default Component;
