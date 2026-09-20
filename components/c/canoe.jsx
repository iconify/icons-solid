import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-dmd_sjb.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="l-dmd_sjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:canoe"} {...others} />);
}

export default Component;
