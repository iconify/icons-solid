import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtakl83bo.css';
import '../../css/c/cap2omi-v.css';
import '../../css/t/t682zr9oq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jtakl83bo"/><path class="cap2omi-v"/><path class="t682zr9oq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:onlyoffice-dark"} {...others} />);
}

export default Component;
