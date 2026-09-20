import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/s/s-xxlii2p.css';
import '../../css/q/q0ouhhhum.css';
import '../../css/d/d9loopb4b.css';
import '../../css/w/web667b_o.css';
import '../../css/f/f34ytpb0b.css';
import '../../css/b/bw5mh65tu.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="s-xxlii2p"/><path class="q0ouhhhum"/><circle class="d9loopb4b"/><path class="web667b_o"/><path class="f34ytpb0b"/><circle class="bw5mh65tu"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-ethiopia"} {...others} />);
}

export default Component;
