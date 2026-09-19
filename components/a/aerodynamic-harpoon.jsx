import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m26-4v_8b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m26-4v_8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:aerodynamic-harpoon"} {...others} />);
}

export default Component;
