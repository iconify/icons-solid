import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri_0_bfkj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ri_0_bfkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:hexagon-alt"} {...others} />);
}

export default Component;
