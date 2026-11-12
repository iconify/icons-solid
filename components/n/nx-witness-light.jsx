import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iudnm730z.css';
import '../../css/l/lwo5f24pv.css';
import '../../css/l/ln0ym_was.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iudnm730z"/><path class="lwo5f24pv"/><path class="ln0ym_was"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nx-witness-light"} {...others} />);
}

export default Component;
