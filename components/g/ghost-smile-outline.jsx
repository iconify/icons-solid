import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgtu0ushs.css';
import '../../css/f/fxx3vj85s.css';
import '../../css/f/f0jrc02ha.css';
import '../../css/q/q_81dnb5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pgtu0ushs"/><path class="fxx3vj85s"/><path class="f0jrc02ha"/><path clip-rule="evenodd" class="q_81dnb5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ghost-smile-outline"} {...others} />);
}

export default Component;
