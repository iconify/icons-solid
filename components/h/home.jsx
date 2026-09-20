import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ka1p2wyfl.css';
import '../../css/n/ng_udhb8v.css';
import '../../css/g/g4-q86_8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ka1p2wyfl"/><path class="ng_udhb8v"/><path class="g4-q86_8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:home"} {...others} />);
}

export default Component;
