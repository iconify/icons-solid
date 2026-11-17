import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4yn72lps.css';
import '../../css/r/rqws4-_6e.css';
import '../../css/r/r2w6hntqn.css';
import '../../css/z/zg90dh62t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g4yn72lps"/><path class="rqws4-_6e"/><path class="r2w6hntqn"/><path class="zg90dh62t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:seamside"} {...others} />);
}

export default Component;
