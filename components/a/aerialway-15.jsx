import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oaodrq99u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="oaodrq99u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:aerialway-15"} {...others} />);
}

export default Component;
