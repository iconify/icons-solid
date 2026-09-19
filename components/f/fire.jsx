import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0lrd7bto.css';

const viewBox = {"width":20,"height":24};
const content = `<path class="e0lrd7bto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:fire"} {...others} />);
}

export default Component;
