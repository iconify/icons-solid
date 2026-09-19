import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6oizj4ea.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a6oizj4ea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:vimeo-v"} {...others} />);
}

export default Component;
