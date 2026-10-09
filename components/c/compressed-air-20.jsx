import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-300obtu.css';
import '../../css/w/we0xbxfdt.css';
import '../../css/s/shaiqxb2f.css';
import '../../css/c/clim4d_fk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o-300obtu"/><path class="we0xbxfdt"/><path class="shaiqxb2f"/><path class="clim4d_fk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:compressed-air-20"} {...others} />);
}

export default Component;
