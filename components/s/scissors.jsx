import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z75kw-b6j.css';
import '../../css/t/thhb5jvkd.css';
import '../../css/p/p6qe0dtvu.css';
import '../../css/g/g43g2-bnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k z75kw-b6j"/><path class="thhb5jvkd wm-k"/><path class="p6qe0dtvu wm-k"/><path class="g43g2-bnc wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:scissors"} {...others} />);
}

export default Component;
