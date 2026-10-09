import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czalfpt_j.css';
import '../../css/g/g1zbydbwf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="czalfpt_j"/><path class="g1zbydbwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trending-up-20"} {...others} />);
}

export default Component;
