import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj7hsab7s.css';
import '../../css/j/jnzjf276y.css';
import '../../css/n/n20_omb2u.css';
import '../../css/n/njypggavl.css';
import '../../css/e/e-z_0hbgs.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mj7hsab7s"/><path class="jnzjf276y"/><g class="n20_omb2u"><path class="njypggavl"/><path class="e-z_0hbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:optical-disk"} {...others} />);
}

export default Component;
