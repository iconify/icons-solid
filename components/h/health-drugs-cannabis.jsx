import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7xpljjum.css';
import '../../css/w/wsh9lzbew.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m7xpljjum"/><path class="wsh9lzbew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-drugs-cannabis"} {...others} />);
}

export default Component;
