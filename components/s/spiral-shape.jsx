import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp6l-5t5b.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="lp6l-5t5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:spiral-shape"} {...others} />);
}

export default Component;
