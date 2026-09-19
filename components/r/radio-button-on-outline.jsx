import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsg5j7ibl.css';
import '../../css/u/u69nt_bhi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lsg5j7ibl"/><circle class="u69nt_bhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:radio-button-on-outline"} {...others} />);
}

export default Component;
