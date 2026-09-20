import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-yr9xtxq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="z-yr9xtxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sugarcane-stalk-with-top-leaves"} {...others} />);
}

export default Component;
