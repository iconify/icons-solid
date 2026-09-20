import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx6xl1bur.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kx6xl1bur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:backbonedotjs"} {...others} />);
}

export default Component;
