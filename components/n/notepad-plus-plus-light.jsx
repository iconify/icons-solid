import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6a_bmqya.css';
import '../../css/r/r5ot870ug.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s6a_bmqya"/><path class="r5ot870ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:notepad-plus-plus-light"} {...others} />);
}

export default Component;
