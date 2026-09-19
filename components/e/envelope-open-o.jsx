import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmr9r7v8h.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="jmr9r7v8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:envelope-open-o"} {...others} />);
}

export default Component;
