import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx9lqb31c.css';
import '../../css/i/isdp0_b-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jx9lqb31c"/><path clip-rule="evenodd" class="isdp0_b-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:stats-alt-2"} {...others} />);
}

export default Component;
