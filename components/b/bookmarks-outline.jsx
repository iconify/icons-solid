import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob6fqnbja.css';
import '../../css/u/u0bpkj-iv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ob6fqnbja"/><path class="u0bpkj-iv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:bookmarks-outline"} {...others} />);
}

export default Component;
