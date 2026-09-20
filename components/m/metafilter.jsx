import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3_k1ccxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w3_k1ccxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:metafilter"} {...others} />);
}

export default Component;
