import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8t8phb8t.css';
import '../../css/k/k9nd7m2gk.css';
import '../../css/o/ol1wuwbkq.css';
import '../../css/c/ce-taw9ke.css';
import '../../css/l/l_iwwg5oc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e8t8phb8t"/><path class="k9nd7m2gk"/><path class="ol1wuwbkq"/><path class="ce-taw9ke"/><path class="l_iwwg5oc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-flash-off"} {...others} />);
}

export default Component;
