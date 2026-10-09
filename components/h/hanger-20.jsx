import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juj97tbkw.css';
import '../../css/l/lsr8k0bex.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="juj97tbkw"/><path class="lsr8k0bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hanger-20"} {...others} />);
}

export default Component;
