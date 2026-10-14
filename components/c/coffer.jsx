import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgmg2zboc.css';
import '../../css/k/kbcof-b_s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sgmg2zboc"/><path class="kbcof-b_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:coffer"} {...others} />);
}

export default Component;
