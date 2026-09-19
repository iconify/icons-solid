import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsit_hb8q.css';
import '../../css/k/kdqm06bos.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xsit_hb8q"/><path class="kdqm06bos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-person-outline"} {...others} />);
}

export default Component;
