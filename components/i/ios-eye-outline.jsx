import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4ba3tqnk.css';
import '../../css/z/z5kklv8jo.css';
import '../../css/a/agjlaub_x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u4ba3tqnk"/><path class="z5kklv8jo"/><path class="agjlaub_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-eye-outline"} {...others} />);
}

export default Component;
