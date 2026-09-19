import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmtkp5byu.css';
import '../../css/j/jyj0czf8z.css';
import '../../css/a/a4_yhfdzc.css';
import '../../css/d/du2o76hwu.css';
import '../../css/r/rzbq2ac6y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fmtkp5byu"/><path class="jyj0czf8z"/><path class="a4_yhfdzc"/><path class="du2o76hwu"/><path class="rzbq2ac6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-paper"} {...others} />);
}

export default Component;
