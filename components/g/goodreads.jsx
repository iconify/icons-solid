import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yb5n4phcw.css';
import '../../css/d/dggo-4bwf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yb5n4phcw"/><path class="dggo-4bwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:goodreads"} {...others} />);
}

export default Component;
