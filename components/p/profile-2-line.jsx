import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qc24c_b4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qc24c_b4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:profile-2-line"} {...others} />);
}

export default Component;
