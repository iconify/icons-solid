import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbj_h5bon.css';

const viewBox = {"width":464,"height":488};
const content = `<path class="wbj_h5bon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:simplenote"} {...others} />);
}

export default Component;
