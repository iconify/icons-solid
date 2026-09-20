import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rl30djqpt.css';
import '../../css/a/ad8qs5b0r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rl30djqpt"/><path class="ad8qs5b0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:brother"} {...others} />);
}

export default Component;
