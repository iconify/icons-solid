import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo7956bee.css';
import '../../css/a/asu1pqv5y.css';
import '../../css/n/n2cwm3b-l.css';
import '../../css/y/yw1-5cc1y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mo7956bee"/><path class="asu1pqv5y"/><path class="n2cwm3b-l"/><path class="yw1-5cc1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sando-light"} {...others} />);
}

export default Component;
