import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bxr8mzbxm.css';
import '../../css/z/zvnq6zy0d.css';
import '../../css/f/fhnye3b1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bxr8mzbxm"/><path class="zvnq6zy0d"/><path class="fhnye3b1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-ring-broken"} {...others} />);
}

export default Component;
