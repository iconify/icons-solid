import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8l0oobdd.css';
import '../../css/w/wg3u04byh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a8l0oobdd"/><path class="wg3u04byh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:shirt"} {...others} />);
}

export default Component;
