import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/m/mfefy2b5h.css';
import '../../css/a/avnz0dbim.css';
import '../../css/a/aia7l3btd.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path clip-rule="evenodd" class="mfefy2b5h"/><path clip-rule="evenodd" class="avnz0dbim"/><path clip-rule="evenodd" class="aia7l3btd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:activitypub-dark"} {...others} />);
}

export default Component;
