import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3s-vtbjn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="u3s-vtbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:syrup-jug-with-sugarcane-stalk-with-leaves"} {...others} />);
}

export default Component;
