import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq0hqej1b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jq0hqej1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:barbed-spear"} {...others} />);
}

export default Component;
