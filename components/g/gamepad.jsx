import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/une91sbso.css';
import '../../css/c/cbpc7btec.css';
import '../../css/l/lsfe1172a.css';
import '../../css/s/s0ed558ma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="une91sbso wm-shadow"/><path class="cbpc7btec wm-shadow"/><path class="lsfe1172a"/><path class="s0ed558ma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:gamepad"} {...others} />);
}

export default Component;
