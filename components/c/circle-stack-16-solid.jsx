import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv08i_bqv.css';
import '../../css/s/s1o53nbht.css';
import '../../css/q/qkn998sep.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sv08i_bqv"/><path class="s1o53nbht"/><path class="qkn998sep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:circle-stack-16-solid"} {...others} />);
}

export default Component;
