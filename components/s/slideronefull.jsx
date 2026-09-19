import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co1d7b4qk.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="co1d7b4qk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:slideronefull"} {...others} />);
}

export default Component;
