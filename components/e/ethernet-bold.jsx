import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfjt46bsz.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="mfjt46bsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:ethernet-bold"} {...others} />);
}

export default Component;
