import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/qp5p3d7zu.css';
import '../../css/t/t3p_-vs5e.css';
import '../../css/i/i1bqeia1p.css';
import '../../css/v/v1ae4cc8z.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="qp5p3d7zu"/><path class="t3p_-vs5e"/><path class="i1bqeia1p"/><path class="v1ae4cc8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-tg"} {...others} />);
}

export default Component;
