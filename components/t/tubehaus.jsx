import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxqmevb6p.css';
import '../../css/p/pan7dlbeh.css';
import '../../css/s/sjj76ybgs.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="uxqmevb6p"/><path class="pan7dlbeh"/><path class="sjj76ybgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tubehaus"} {...others} />);
}

export default Component;
