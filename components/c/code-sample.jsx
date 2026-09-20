import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-s4vtjqv.css';

const viewBox = {"width":18,"height":14};
const content = `<path class="n-s4vtjqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:code-sample"} {...others} />);
}

export default Component;
