import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j06qx_bkh.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="j06qx_bkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:hourglass4"} {...others} />);
}

export default Component;
