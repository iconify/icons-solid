import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrrg9d2my.css';
import '../../css/y/yxxk2yx8a.css';
import '../../css/l/lb6m3_zjp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nrrg9d2my"/><path class="yxxk2yx8a"/><path class="lb6m3_zjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:tags"} {...others} />);
}

export default Component;
