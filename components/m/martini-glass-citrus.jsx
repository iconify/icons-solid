import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mph6v1b_g.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="mph6v1b_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:martini-glass-citrus"} {...others} />);
}

export default Component;
