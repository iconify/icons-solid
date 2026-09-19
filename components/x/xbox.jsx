import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrcj8s57n.css';

const viewBox = {"width":1024,"height":832};
const content = `<path class="jrcj8s57n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:xbox"} {...others} />);
}

export default Component;
