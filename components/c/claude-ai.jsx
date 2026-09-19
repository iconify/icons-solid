import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-k-cebwl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j-k-cebwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:claude-ai"} {...others} />);
}

export default Component;
