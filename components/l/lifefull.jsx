import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_g4ftbrd.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="o_g4ftbrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:lifefull"} {...others} />);
}

export default Component;
