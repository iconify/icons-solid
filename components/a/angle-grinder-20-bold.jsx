import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrfwqwnbz.css';
import '../../css/i/in3blmbct.css';
import '../../css/c/cg_uq7u7r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vrfwqwnbz"/><path class="in3blmbct"/><path class="cg_uq7u7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:angle-grinder-20-bold"} {...others} />);
}

export default Component;
