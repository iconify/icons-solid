import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqhlzqbqh.css';
import '../../css/w/wt-lpqbxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tqhlzqbqh"/><path clip-rule="evenodd" class="wt-lpqbxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-minimalistic-2-bold"} {...others} />);
}

export default Component;
