import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdsy2ybwq.css';
import '../../css/e/ei9rd5b8i.css';
import '../../css/q/qt8z-bb-s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pdsy2ybwq"/><path class="ei9rd5b8i"/><path class="qt8z-bb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kdrive-light"} {...others} />);
}

export default Component;
