import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgttro11x.css';
import '../../css/d/dl8utqb_s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qgttro11x"/><path class="dl8utqb_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tradetally-dark"} {...others} />);
}

export default Component;
