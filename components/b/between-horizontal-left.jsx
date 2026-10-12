import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcske0ocb.css';
import '../../css/b/b2wzjm0mk.css';
import '../../css/x/xmmk2obgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(1 0 0 -1 14 21.3)" class="wcske0ocb"/><rect transform="matrix(1 0 0 -1 2.74 21.3)" class="wcske0ocb"/><rect transform="matrix(1 0 0 -1 14 21.3)" class="b2wzjm0mk"/><rect transform="matrix(1 0 0 -1 2.74 21.3)" class="b2wzjm0mk"/><path class="xmmk2obgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:between-horizontal-left"} {...others} />);
}

export default Component;
