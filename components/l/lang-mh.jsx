import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/h/hvxoz8z9b.css';
import '../../css/v/vzdm28mye.css';
import '../../css/l/l8a03sjai.css';
import '../../css/v/vtxrx9bbe.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="hvxoz8z9b"/><path class="vzdm28mye"/><path class="l8a03sjai"/><path class="vtxrx9bbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-mh"} {...others} />);
}

export default Component;
