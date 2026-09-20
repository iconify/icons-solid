import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4jw8wbpz.css';
import '../../css/b/bnnoq8bqn.css';
import '../../css/e/ejqbi5b-l.css';
import '../../css/i/i3ff7jbav.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="f4jw8wbpz"/><circle class="bnnoq8bqn"/><path class="ejqbi5b-l"/><path class="i3ff7jbav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:biohazard"} {...others} />);
}

export default Component;
