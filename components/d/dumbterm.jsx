import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pby_48b_c.css';
import '../../css/w/wci5zzb5n.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="pby_48b_c"/><path class="wci5zzb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dumbterm"} {...others} />);
}

export default Component;
