import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl5uzhbhz.css';
import '../../css/e/egfpnrb2n.css';
import '../../css/i/i07gwburj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vl5uzhbhz"/><path class="egfpnrb2n"/><path class="i07gwburj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:user-circle"} {...others} />);
}

export default Component;
