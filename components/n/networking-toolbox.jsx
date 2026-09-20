import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se4hh51qv.css';
import '../../css/e/e0fc6m9hj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="se4hh51qv"/><path class="e0fc6m9hj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:networking-toolbox"} {...others} />);
}

export default Component;
