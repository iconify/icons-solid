import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1x2-08ga.css';
import '../../css/z/zzq0s9bak.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t1x2-08ga"/><path class="zzq0s9bak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:trash-b"} {...others} />);
}

export default Component;
