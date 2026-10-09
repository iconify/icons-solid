import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2e3_lbdq.css';
import '../../css/v/vjq6vyoor.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u2e3_lbdq"/><path class="vjq6vyoor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:beer-20"} {...others} />);
}

export default Component;
