import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5e98f89i.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="f5e98f89i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:arrow-top"} {...others} />);
}

export default Component;
