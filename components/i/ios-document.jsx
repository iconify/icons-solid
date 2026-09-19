import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blhdngppl.css';
import '../../css/c/cnc6799tr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="blhdngppl"/><path class="cnc6799tr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-document"} {...others} />);
}

export default Component;
