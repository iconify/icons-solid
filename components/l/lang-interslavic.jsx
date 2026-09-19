import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/r1fqibbtg.css';
import '../../css/i/i1vplkssi.css';
import '../../css/c/cgx7qpb0o.css';
import '../../css/m/m1bazrfir.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="r1fqibbtg"/><path class="i1vplkssi"/><path class="cgx7qpb0o"/><path class="m1bazrfir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-interslavic"} {...others} />);
}

export default Component;
