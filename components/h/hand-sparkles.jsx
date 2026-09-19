import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffp8ehbfy.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="ffp8ehbfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:hand-sparkles"} {...others} />);
}

export default Component;
