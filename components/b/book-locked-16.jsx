import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-lfmccxy.css';
import '../../css/p/pn4efebvn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i-lfmccxy"/><path class="pn4efebvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:book-locked-16"} {...others} />);
}

export default Component;
