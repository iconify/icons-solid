import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj3jhzbpf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cj3jhzbpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:stumble-upon-2ing-logo"} {...others} />);
}

export default Component;
