import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0_3hsgpg.css';
import '../../css/h/hw9pzduln.css';
import '../../css/x/x8hovebwh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s0_3hsgpg"/><path class="hw9pzduln"/><path class="x8hovebwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:holyarrs-light"} {...others} />);
}

export default Component;
