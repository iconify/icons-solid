import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_d9ekbof.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z_d9ekbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:crystal-shrine"} {...others} />);
}

export default Component;
