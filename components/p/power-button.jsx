import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jux0sgb4d.css';
import '../../css/i/i3h_fy-ls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jux0sgb4d"/><path class="i3h_fy-ls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:power-button"} {...others} />);
}

export default Component;
