import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0lsn2zoo.css';

const viewBox = {"width":1024,"height":1026};
const content = `<path class="n0lsn2zoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:arrowleft"} {...others} />);
}

export default Component;
