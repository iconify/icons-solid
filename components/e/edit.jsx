import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8g8qlfld.css';
import '../../css/a/a50et0bgu.css';
import '../../css/q/q-6bg4l5x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r8g8qlfld"/><path class="a50et0bgu"/><path class="q-6bg4l5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:edit"} {...others} />);
}

export default Component;
