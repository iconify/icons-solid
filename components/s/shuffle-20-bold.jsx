import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg5px6bdo.css';
import '../../css/u/ux46odduj.css';
import '../../css/y/yix08vbas.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xg5px6bdo"/><path class="ux46odduj"/><path class="yix08vbas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shuffle-20-bold"} {...others} />);
}

export default Component;
