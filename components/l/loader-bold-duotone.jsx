import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql-1g5bil.css';
import '../../css/w/we5rc8m_b.css';
import '../../css/i/igcg0ebrk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ql-1g5bil"/><path class="we5rc8m_b"/><path class="igcg0ebrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:loader-bold-duotone"} {...others} />);
}

export default Component;
