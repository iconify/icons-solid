import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o84xpx01m.css';
import '../../css/u/ugibgdcyc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o84xpx01m"/><path class="ugibgdcyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:the-lounge"} {...others} />);
}

export default Component;
