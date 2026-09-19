import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8rpnac1c.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="q8rpnac1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:shopping-bag"} {...others} />);
}

export default Component;
