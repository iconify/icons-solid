import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz1vtzbsv.css';

const viewBox = {"width":355,"height":512};
const content = `<path class="cz1vtzbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:bazel-old"} {...others} />);
}

export default Component;
