import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vigo633vd.css';
import '../../css/i/ie7387b1v.css';
import '../../css/u/un3wu1fqw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vigo633vd"/><path class="ie7387b1v"/><path class="un3wu1fqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heart-hands-duo"} {...others} />);
}

export default Component;
