import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpjk8pbbu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lpjk8pbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:dashboard-gear"} {...others} />);
}

export default Component;
