import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-gufo90d.css';
import '../../css/v/vvd0k01le.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j-gufo90d"/><path class="vvd0k01le"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:quick-reference"} {...others} />);
}

export default Component;
