import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r491jv1-w.css';
import '../../css/s/suz6erb9m.css';
import '../../css/s/sfe1dac9u.css';
import '../../css/d/ddjrsy3wl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r491jv1-w"/><path class="suz6erb9m"/><path class="sfe1dac9u"/><path class="ddjrsy3wl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jump"} {...others} />);
}

export default Component;
