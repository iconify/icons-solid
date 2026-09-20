import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ws1o19b9q.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ws1o19b9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:church"} {...others} />);
}

export default Component;
