import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl-44q3kf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jl-44q3kf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:cube-dots-solid"} {...others} />);
}

export default Component;
