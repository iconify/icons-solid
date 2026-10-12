import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp3lwibtz.css';
import '../../css/m/mdwpa6sgu.css';
import '../../css/u/udgxuob1y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lp3lwibtz"/><path class="mdwpa6sgu"/><path class="udgxuob1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:feather-48-bold"} {...others} />);
}

export default Component;
