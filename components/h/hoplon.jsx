import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1-g0ub6k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u1-g0ub6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:hoplon"} {...others} />);
}

export default Component;
