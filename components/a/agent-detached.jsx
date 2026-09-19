import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6lprsbiy.css';
import '../../css/s/snqitqbqr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p6lprsbiy"/><path class="snqitqbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:agent-detached"} {...others} />);
}

export default Component;
