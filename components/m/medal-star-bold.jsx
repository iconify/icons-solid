import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yccjtab6a.css';
import '../../css/c/ctt96pn4i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yccjtab6a"/><path class="ctt96pn4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-star-bold"} {...others} />);
}

export default Component;
