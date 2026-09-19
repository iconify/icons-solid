import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/l/lb-lfcbse.css';
import '../../css/o/o0nuu56uu.css';
import '../../css/v/v3vmq-b5d.css';
import '../../css/v/vtefd5b4t.css';
import '../../css/h/h77j_ab7t.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsLn0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsLn0)"><path class="lb-lfcbse"/><path class="o0nuu56uu"/><path class="v3vmq-b5d"/><path class="vtefd5b4t"/><path class="h77j_ab7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ln"} {...others} />);
}

export default Component;
