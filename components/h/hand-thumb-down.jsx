import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh_m7bbcg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vh_m7bbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:hand-thumb-down"} {...others} />);
}

export default Component;
