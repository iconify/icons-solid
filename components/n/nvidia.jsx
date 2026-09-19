import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqe0vpyij.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kqe0vpyij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:nvidia"} {...others} />);
}

export default Component;
