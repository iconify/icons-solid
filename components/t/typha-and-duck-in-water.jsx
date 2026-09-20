import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-55etb0y.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="u-55etb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:typha-and-duck-in-water"} {...others} />);
}

export default Component;
