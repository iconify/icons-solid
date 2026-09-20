import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue-hx7a2u.css';
import '../../css/r/r97zvfb6s.css';
import '../../css/c/c18_ysapx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ue-hx7a2u"/><path class="r97zvfb6s"/><path class="c18_ysapx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:taiga-dark"} {...others} />);
}

export default Component;
