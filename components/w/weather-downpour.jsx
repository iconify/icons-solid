import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8a6jl31k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z8a6jl31k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:weather-downpour"} {...others} />);
}

export default Component;
