import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylhdevp5c.css';
import '../../css/v/v-gec3bcs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ylhdevp5c"/><path class="v-gec3bcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:focus-center-16"} {...others} />);
}

export default Component;
