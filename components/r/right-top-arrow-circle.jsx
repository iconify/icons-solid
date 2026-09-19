import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyzmj84gk.css';
import '../../css/r/rrzjp2boj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nyzmj84gk"/><path class="rrzjp2boj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:right-top-arrow-circle"} {...others} />);
}

export default Component;
