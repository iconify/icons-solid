import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ploysl_qi.css';
import '../../css/j/jlgzaobtm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ploysl_qi"/><path class="jlgzaobtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:piefed"} {...others} />);
}

export default Component;
