import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mm_wv7bbg.css';
import '../../css/s/s4tlt4sln.css';
import '../../css/w/w76zpvmlz.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsHa0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsHa0)"><path class="mm_wv7bbg"/><path class="s4tlt4sln"/><path class="w76zpvmlz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ha"} {...others} />);
}

export default Component;
