import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1wkb86ze.css';
import '../../css/u/u6d9mwu4u.css';
import '../../css/y/y18icnb3k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y1wkb86ze"/><path class="u6d9mwu4u"/><path class="y18icnb3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dial-indicator-20"} {...others} />);
}

export default Component;
