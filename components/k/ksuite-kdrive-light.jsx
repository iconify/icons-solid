import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqb529s1o.css';
import '../../css/z/zrjwygnwg.css';
import '../../css/q/qt8z-bb-s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qqb529s1o"/><path class="zrjwygnwg"/><path class="qt8z-bb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kdrive-light"} {...others} />);
}

export default Component;
