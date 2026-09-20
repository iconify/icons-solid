import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do5wwxbpa.css';
import '../../css/a/az6iwibpt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="do5wwxbpa"/><path class="az6iwibpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:warpgate"} {...others} />);
}

export default Component;
