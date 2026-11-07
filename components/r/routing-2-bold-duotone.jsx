import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe32f93df.css';
import '../../css/z/zaq8jgbqr.css';
import '../../css/o/ouhyjzb-t.css';
import '../../css/q/qrmgfrbnf.css';
import '../../css/e/ejdkbfbdj.css';
import '../../css/p/picmuzzmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="qe32f93df"><path class="zaq8jgbqr"/><path class="ouhyjzb-t"/></g><path class="qrmgfrbnf"/><path class="ejdkbfbdj"/><path class="picmuzzmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:routing-2-bold-duotone"} {...others} />);
}

export default Component;
