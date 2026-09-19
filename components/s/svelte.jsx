import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s61fxyb8s.css';
import '../../css/t/tyum8jbog.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="s61fxyb8s"/><path class="tyum8jbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:svelte"} {...others} />);
}

export default Component;
