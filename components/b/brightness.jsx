import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxmby0bbg.css';
import '../../css/b/bxhkq1b-t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lxmby0bbg"/><path class="bxhkq1b-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:brightness"} {...others} />);
}

export default Component;
