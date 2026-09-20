import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xanc48bmb.css';
import '../../css/y/ydi54qb2a.css';
import '../../css/n/nc03m9bwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xanc48bmb"/><path class="ydi54qb2a"/><path class="nc03m9bwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:paper-duotone"} {...others} />);
}

export default Component;
