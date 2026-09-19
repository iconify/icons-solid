import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aywe44bzw.css';

const viewBox = {"width":380,"height":700};
const content = `<path class="aywe44bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:small-arrow-down"} {...others} />);
}

export default Component;
