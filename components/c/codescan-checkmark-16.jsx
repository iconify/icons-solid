import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc0si1p-z.css';
import '../../css/c/ci07z7bbf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wc0si1p-z"/><path class="ci07z7bbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:codescan-checkmark-16"} {...others} />);
}

export default Component;
