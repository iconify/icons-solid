import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l65irgbeq.css';
import '../../css/f/fl6g1hb9c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l65irgbeq"/><path class="fl6g1hb9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:headplane-light"} {...others} />);
}

export default Component;
