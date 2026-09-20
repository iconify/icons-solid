import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3b-n7bhd.css';
import '../../css/x/xz9214hmm.css';
import '../../css/w/wwgiztejx.css';
import '../../css/a/ai7yfdokr.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="p3b-n7bhd"><path class="xz9214hmm"/><path class="wwgiztejx"/><path class="ai7yfdokr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:user"} {...others} />);
}

export default Component;
