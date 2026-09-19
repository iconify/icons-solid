import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uiw4tobef.css';

const viewBox = {"width":1344,"height":1664};
const content = `<path class="uiw4tobef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:yahoo"} {...others} />);
}

export default Component;
