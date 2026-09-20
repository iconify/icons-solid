import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upz_b1bsg.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="upz_b1bsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:recycle"} {...others} />);
}

export default Component;
