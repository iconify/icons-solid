import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqn9yz3js.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqn9yz3js"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:voipdotms"} {...others} />);
}

export default Component;
