import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg0ptgbvl.css';
import '../../css/y/y6o2cyb_z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eg0ptgbvl"/><path class="y6o2cyb_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:notebook"} {...others} />);
}

export default Component;
