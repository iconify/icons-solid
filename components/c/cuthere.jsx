import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_4vvvb_e.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="x_4vvvb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:cuthere"} {...others} />);
}

export default Component;
