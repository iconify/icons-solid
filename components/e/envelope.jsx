import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxr5i9bck.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="rxr5i9bck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:envelope"} {...others} />);
}

export default Component;
