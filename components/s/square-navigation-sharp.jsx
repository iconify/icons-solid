import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j0mppdb_k.css';
import '../../css/c/cjpys8beh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="j0mppdb_k"/><path class="cjpys8beh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-navigation-sharp"} {...others} />);
}

export default Component;
