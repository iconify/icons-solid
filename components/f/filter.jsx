import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph9nw1sum.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ph9nw1sum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:filter"} {...others} />);
}

export default Component;
