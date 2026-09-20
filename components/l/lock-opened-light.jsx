import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv3lvgb1x.css';
import '../../css/l/ldo0svbxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nv3lvgb1x"/><path class="ldo0svbxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:lock-opened-light"} {...others} />);
}

export default Component;
