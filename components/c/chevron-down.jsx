import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz2m8acdk.css';

const viewBox = {"width":10,"height":16};
const content = `<path class="bz2m8acdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:chevron-down"} {...others} />);
}

export default Component;
