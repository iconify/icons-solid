import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ked3dlbrv.css';
import '../../css/q/qpoa4dbdk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ked3dlbrv"/><path class="qpoa4dbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:munin"} {...others} />);
}

export default Component;
