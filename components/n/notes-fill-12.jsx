import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h93g3zbrf.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="h93g3zbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:notes-fill-12"} {...others} />);
}

export default Component;
