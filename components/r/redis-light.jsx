import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynl1j0b_y.css';
import '../../css/s/s8or9-btt.css';
import '../../css/l/ln9fce54w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ynl1j0b_y"/><path class="s8or9-btt"/><path class="ln9fce54w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:redis-light"} {...others} />);
}

export default Component;
