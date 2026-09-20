import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpno3-vgt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bpno3-vgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:linkedin-box-line"} {...others} />);
}

export default Component;
