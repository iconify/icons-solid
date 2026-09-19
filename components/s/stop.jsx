import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr42-txod.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="rr42-txod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:stop"} {...others} />);
}

export default Component;
