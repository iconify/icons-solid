import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptp8j_z-g.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ptp8j_z-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:lodging"} {...others} />);
}

export default Component;
