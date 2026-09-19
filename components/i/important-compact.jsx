import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhj_eqnyu.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="yhj_eqnyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:important-compact"} {...others} />);
}

export default Component;
