import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnqa97brp.css';
import '../../css/s/s-xxlii2p.css';
import '../../css/q/q0ouhhhum.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cnqa97brp"/><path class="s-xxlii2p"/><path class="q0ouhhhum"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-gabon"} {...others} />);
}

export default Component;
