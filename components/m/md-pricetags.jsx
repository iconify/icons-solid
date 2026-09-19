import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt52jcc3i.css';
import '../../css/n/ns2y_7_hd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rt52jcc3i"/><path class="ns2y_7_hd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-pricetags"} {...others} />);
}

export default Component;
