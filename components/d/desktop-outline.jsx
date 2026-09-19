import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv703tnxb.css';
import '../../css/o/o7jqpib-k.css';
import '../../css/o/oly_7o-mp.css';
import '../../css/p/pmq70fbpo.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="vv703tnxb"/><path class="o7jqpib-k"/><path class="oly_7o-mp"/><path class="pmq70fbpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:desktop-outline"} {...others} />);
}

export default Component;
