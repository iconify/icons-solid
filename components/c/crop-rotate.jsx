import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntgnm7b_i.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="ntgnm7b_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:crop-rotate"} {...others} />);
}

export default Component;
