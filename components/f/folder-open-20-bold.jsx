import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp3cjxxjv.css';
import '../../css/x/xranyficx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tp3cjxxjv"/><path class="xranyficx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-open-20-bold"} {...others} />);
}

export default Component;
