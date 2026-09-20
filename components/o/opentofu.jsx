import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/on8hwbb2t.css';
import '../../css/j/j5w63191d.css';
import '../../css/q/qh5kw87ul.css';
import '../../css/o/og0fqpx9w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="on8hwbb2t"/><path class="j5w63191d"/><path class="qh5kw87ul"/><path class="og0fqpx9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opentofu"} {...others} />);
}

export default Component;
