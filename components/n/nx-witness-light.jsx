import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkmbvobhi.css';
import '../../css/f/fusmf-b6m.css';
import '../../css/l/ln0ym_was.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pkmbvobhi"/><path class="fusmf-b6m"/><path class="ln0ym_was"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nx-witness-light"} {...others} />);
}

export default Component;
