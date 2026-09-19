import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyl1b_bqt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tyl1b_bqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:signal-cellular-4"} {...others} />);
}

export default Component;
