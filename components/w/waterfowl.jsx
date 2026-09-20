import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfg9cb5pf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pfg9cb5pf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:waterfowl"} {...others} />);
}

export default Component;
