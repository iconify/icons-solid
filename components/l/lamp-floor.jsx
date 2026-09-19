import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mqc9-db9x.css';
import '../../css/j/jrmgtoqee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="mqc9-db9x"/><path class="jrmgtoqee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lamp-floor"} {...others} />);
}

export default Component;
