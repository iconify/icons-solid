import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hieec1bzq.css';
import '../../css/p/p07k255dt.css';
import '../../css/o/oaercf5ut.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hieec1bzq"/><path class="p07k255dt"/><path class="oaercf5ut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ko-fi"} {...others} />);
}

export default Component;
