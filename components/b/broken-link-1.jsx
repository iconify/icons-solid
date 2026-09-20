import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8xtmxb0f.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="c8xtmxb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:broken-link-1"} {...others} />);
}

export default Component;
