import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw2-s_bbh.css';
import '../../css/x/x2s5mg4ls.css';
import '../../css/x/xlvmmucks.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aw2-s_bbh"/><path class="x2s5mg4ls"/><path class="xlvmmucks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:compose-craft"} {...others} />);
}

export default Component;
