import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhhiamiic.css';
import '../../css/e/efnhhmbhc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hhhiamiic"/><path class="efnhhmbhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tabs-20"} {...others} />);
}

export default Component;
