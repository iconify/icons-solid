import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/po7yq0b0q.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="po7yq0b0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:battery-upright-three-quarter"} {...others} />);
}

export default Component;
