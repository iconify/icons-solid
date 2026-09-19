import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/aq77xd3-s.css';
import '../../css/a/a7xkzu57u.css';
import '../../css/c/cqxb_cc5b.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><path class="aq77xd3-s"/><path class="a7xkzu57u"/></g><path class="cqxb_cc5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:lightbulb-stroke-12"} {...others} />);
}

export default Component;
