import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uw9r1w66o.css';
import '../../css/k/kvq9f4byf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uw9r1w66o"/><path class="kvq9f4byf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:purse"} {...others} />);
}

export default Component;
