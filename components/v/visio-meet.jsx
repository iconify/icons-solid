import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmxtxk5go.css';
import '../../css/o/ofbjwwbcg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xmxtxk5go"/><path class="ofbjwwbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:visio-meet"} {...others} />);
}

export default Component;
