import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyyw2ejbf.css';
import '../../css/c/cdzkw9bwr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lyyw2ejbf"/><path class="cdzkw9bwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brain-20"} {...others} />);
}

export default Component;
