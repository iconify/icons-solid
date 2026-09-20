import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqzvsjbqs.css';
import '../../css/j/j5k65pgym.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jqzvsjbqs"/><path class="j5k65pgym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bludit"} {...others} />);
}

export default Component;
