import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3omditqb.css';
import '../../css/a/aznntcc2l.css';
import '../../css/r/rlpyj51xn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y3omditqb"/><path class="aznntcc2l"/><path class="rlpyj51xn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:casaos"} {...others} />);
}

export default Component;
