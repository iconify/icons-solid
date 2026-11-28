import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt9w2ci5j.css';
import '../../css/r/ryi59f59s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kt9w2ci5j secondary"/><path class="primary ryi59f59s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sparkle-duo"} {...others} />);
}

export default Component;
