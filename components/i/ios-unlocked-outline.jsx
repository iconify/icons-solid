import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-qvd4btd.css';
import '../../css/i/izm7r3btk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v-qvd4btd"/><path class="izm7r3btk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-unlocked-outline"} {...others} />);
}

export default Component;
