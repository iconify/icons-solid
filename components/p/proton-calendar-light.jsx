import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgvl_034t.css';
import '../../css/y/yuy8pmq7c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mgvl_034t"/><path class="yuy8pmq7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-calendar-light"} {...others} />);
}

export default Component;
