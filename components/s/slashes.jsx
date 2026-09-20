import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1jl_9b0n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p1jl_9b0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:slashes"} {...others} />);
}

export default Component;
