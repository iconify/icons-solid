import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fao0odb7l.css';
import '../../css/v/v-qvd4btd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fao0odb7l"/><path class="v-qvd4btd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-locked-outline"} {...others} />);
}

export default Component;
