import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ziyq9ys9s.css';
import '../../css/q/qgoa3-pny.css';

const viewBox = {"width":16,"height":16};
const content = `<path transform="matrix(.92099 0 0 .92169 -.41 .382)" class="ziyq9ys9s"/><path class="qgoa3-pny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:cursor"} {...others} />);
}

export default Component;
