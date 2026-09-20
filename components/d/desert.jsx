import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/r/rn7th8byh.css';
import '../../css/x/xmees0bzv.css';
import '../../css/f/ff5ahwswr.css';
import '../../css/q/qhg4rccek.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="rn7th8byh"/><path class="xmees0bzv"/><path class="ff5ahwswr"/></g><path class="qhg4rccek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:desert"} {...others} />);
}

export default Component;
