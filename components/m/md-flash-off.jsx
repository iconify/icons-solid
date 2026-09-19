import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgjulrbun.css';
import '../../css/w/w558l_3fd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rgjulrbun"/><path class="w558l_3fd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-flash-off"} {...others} />);
}

export default Component;
