import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itw1ckbiw.css';
import '../../css/g/gryaribnw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="itw1ckbiw"/><path class="gryaribnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-cloudy-night-outline"} {...others} />);
}

export default Component;
