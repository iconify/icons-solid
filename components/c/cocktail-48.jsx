import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbt7-c2ud.css';
import '../../css/s/sug610m-v.css';
import '../../css/g/gz0iumbzk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rbt7-c2ud"/><path class="sug610m-v"/><path class="gz0iumbzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cocktail-48"} {...others} />);
}

export default Component;
