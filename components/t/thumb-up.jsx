import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th2m307zq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="th2m307zq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:thumb-up"} {...others} />);
}

export default Component;
