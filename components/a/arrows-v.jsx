import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxuo3p-of.css';

const viewBox = {"width":640,"height":1792};
const content = `<path class="jxuo3p-of"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:arrows-v"} {...others} />);
}

export default Component;
