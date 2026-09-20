import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxg1hjyts.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxg1hjyts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:china-eastern-airlines"} {...others} />);
}

export default Component;
