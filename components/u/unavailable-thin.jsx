import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6qgw_b9e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6qgw_b9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:unavailable-thin"} {...others} />);
}

export default Component;
