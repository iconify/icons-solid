import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiyi5t_0v.css';
import '../../css/u/ufh9qkbxk.css';
import '../../css/n/naagimbyi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oiyi5t_0v"/><path class="ufh9qkbxk"/><path class="naagimbyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:cmake"} {...others} />);
}

export default Component;
