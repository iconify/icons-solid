import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rx3nz_bus.css';
import '../../css/n/ndo424b7h.css';
import '../../css/q/q8jig3bhh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rx3nz_bus"/><path class="ndo424b7h"/><path class="q8jig3bhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beets"} {...others} />);
}

export default Component;
