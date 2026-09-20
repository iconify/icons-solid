import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9pcknmql.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s9pcknmql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:table-tennis-paddle-and-ball"} {...others} />);
}

export default Component;
