import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl3nf4b0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jl3nf4b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:refresh-1-line"} {...others} />);
}

export default Component;
