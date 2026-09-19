import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3r98nq1y.css';

const viewBox = {"width":1025,"height":1023};
const content = `<path class="u3r98nq1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:fatundo"} {...others} />);
}

export default Component;
