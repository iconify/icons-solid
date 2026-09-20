import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrm90vr2z.css';
import '../../css/r/rvlpixg0l.css';
import '../../css/d/dgch7ibmy.css';

const viewBox = {"width":500,"height":500};
const content = `<path class="lrm90vr2z"/><path class="rvlpixg0l"/><path class="dgch7ibmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:fsharp"} {...others} />);
}

export default Component;
