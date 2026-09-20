import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl8jdu0bj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jl8jdu0bj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:navigation-discount"} {...others} />);
}

export default Component;
