import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-8mdgbgj.css';

const viewBox = {"width":771,"height":1028};
const content = `<path class="a-8mdgbgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:avocado"} {...others} />);
}

export default Component;
