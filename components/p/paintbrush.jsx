import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-7x2dsjp.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="i-7x2dsjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:paintbrush"} {...others} />);
}

export default Component;
