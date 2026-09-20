import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/urku17b6o.css';
import '../../css/p/p40ma2gds.css';
import '../../css/v/vuaec7b0u.css';
import '../../css/a/aa5rq9b4e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="urku17b6o"/><path class="p40ma2gds"/><path class="vuaec7b0u"/><path class="aa5rq9b4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:check-badge"} {...others} />);
}

export default Component;
