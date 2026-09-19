import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x07p7ld2n.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="x07p7ld2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:moviereelalt"} {...others} />);
}

export default Component;
