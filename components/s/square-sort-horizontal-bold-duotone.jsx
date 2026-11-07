import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edf2mabxb.css';
import '../../css/t/tmi2ocbvf.css';
import '../../css/r/rwz9xbcdr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="edf2mabxb"/><path class="tmi2ocbvf"/><path class="rwz9xbcdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-sort-horizontal-bold-duotone"} {...others} />);
}

export default Component;
