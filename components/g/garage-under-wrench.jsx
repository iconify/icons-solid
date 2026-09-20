import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um98v6b5c.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="um98v6b5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:garage-under-wrench"} {...others} />);
}

export default Component;
