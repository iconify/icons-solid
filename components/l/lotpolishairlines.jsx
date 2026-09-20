import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlc3m7bll.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rlc3m7bll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:lotpolishairlines"} {...others} />);
}

export default Component;
