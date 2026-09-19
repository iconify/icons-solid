import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2tprwbpc.css';
import '../../css/v/vwxhrfbti.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="x2tprwbpc"/><path class="vwxhrfbti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:flower-sharp"} {...others} />);
}

export default Component;
