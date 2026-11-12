import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_mutobdf.css';
import '../../css/b/bdz5tbc3y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c_mutobdf"/><path class="bdz5tbc3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-calendar-dark"} {...others} />);
}

export default Component;
