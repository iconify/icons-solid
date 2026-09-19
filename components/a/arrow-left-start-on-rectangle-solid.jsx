import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3jl3kb1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t3jl3kb1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-left-start-on-rectangle-solid"} {...others} />);
}

export default Component;
