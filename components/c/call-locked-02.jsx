import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/lei3g-6cs.css';
import '../../css/a/anl65xbtr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="lei3g-6cs"/><path class="anl65xbtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-locked-02"} {...others} />);
}

export default Component;
