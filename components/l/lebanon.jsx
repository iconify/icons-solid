import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7ephwb-o.css';
import '../../css/v/v_devvdob.css';
import '../../css/f/fwasz7buv.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="x7ephwb-o"/><path class="v_devvdob"/><path class="fwasz7buv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:lebanon"} {...others} />);
}

export default Component;
