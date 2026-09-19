import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4kxfbcij.css';
import '../../css/s/sqhl82lfo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y4kxfbcij"/><path class="sqhl82lfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:gift-top-16-solid"} {...others} />);
}

export default Component;
