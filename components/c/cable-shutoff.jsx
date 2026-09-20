import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dn-xrwb_q.css';
import '../../css/f/fs5_8vkqb.css';
import '../../css/k/k-njt2b4a.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dn-xrwb_q"/><path class="fs5_8vkqb"/><path class="k-njt2b4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:cable-shutoff"} {...others} />);
}

export default Component;
