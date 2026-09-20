import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rl6_mcbxf.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="rl6_mcbxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:girl"} {...others} />);
}

export default Component;
