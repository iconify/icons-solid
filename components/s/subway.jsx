import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmhu_wbhm.css';
import '../../css/c/cfnmk50zf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rmhu_wbhm"/><path class="cfnmk50zf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:subway"} {...others} />);
}

export default Component;
