import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkf_nqv3a.css';

const viewBox = {"width":65,"height":65,"left":33};
const content = `<path class="qkf_nqv3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:chunk-dark"} {...others} />);
}

export default Component;
