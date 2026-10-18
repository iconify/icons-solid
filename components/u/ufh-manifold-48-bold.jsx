import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rflk6vf2q.css';
import '../../css/o/ohc5ubgim.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rflk6vf2q"/><path class="ohc5ubgim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ufh-manifold-48-bold"} {...others} />);
}

export default Component;
