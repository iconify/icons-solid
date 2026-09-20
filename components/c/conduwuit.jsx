import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4goj5bvt.css';
import '../../css/y/yrj6_5bgi.css';
import '../../css/d/d83egmi4t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w4goj5bvt"/><path class="yrj6_5bgi"/><path class="d83egmi4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:conduwuit"} {...others} />);
}

export default Component;
