import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rngk_hb0z.css';
import '../../css/w/w-d_ndb4n.css';
import '../../css/d/dah1ttb-a.css';

const viewBox = {"width":42.5,"height":42.6};
const content = `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="rngk_hb0z"/><path class="w-d_ndb4n"/><path class="dah1ttb-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:constant-contact"} {...others} />);
}

export default Component;
