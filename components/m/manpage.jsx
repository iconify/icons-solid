import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbsf62b3k.css';
import '../../css/p/pwvlvn-7d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hbsf62b3k"/><path class="pwvlvn-7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:manpage"} {...others} />);
}

export default Component;
