import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0j8-xbhn.css';
import '../../css/z/z54z46b3e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d0j8-xbhn"/><path class="z54z46b3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:clickhouse"} {...others} />);
}

export default Component;
