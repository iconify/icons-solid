import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5wa9vbik.css';
import '../../css/o/ov49f6buq.css';
import '../../css/v/vvs-xib6v.css';
import '../../css/d/do5vw-_td.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y5wa9vbik"/><path class="ov49f6buq"/><path class="vvs-xib6v"/><path class="do5vw-_td"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ties-link-sharing-light"} {...others} />);
}

export default Component;
