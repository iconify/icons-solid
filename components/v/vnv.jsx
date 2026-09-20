import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_lt3l0cw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="e_lt3l0cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:vnv"} {...others} />);
}

export default Component;
