import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sse8e8bnx.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="sse8e8bnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:warning"} {...others} />);
}

export default Component;
