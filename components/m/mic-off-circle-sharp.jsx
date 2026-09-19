import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yihaffb1f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yihaffb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:mic-off-circle-sharp"} {...others} />);
}

export default Component;
