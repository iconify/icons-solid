import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3c8hybgh.css';
import '../../css/i/izfww2b3l.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="g3c8hybgh"/><path class="izfww2b3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:android-camera"} {...others} />);
}

export default Component;
