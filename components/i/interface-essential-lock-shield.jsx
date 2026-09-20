import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgcl_acrx.css';
import '../../css/n/n83ma-b2t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jgcl_acrx"/><path class="n83ma-b2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-lock-shield"} {...others} />);
}

export default Component;
