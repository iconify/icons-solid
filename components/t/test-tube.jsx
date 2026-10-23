import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/a4hw9ib_n.css';
import '../../css/y/ydpokubwa.css';
import '../../css/v/vogjf-lhc.css';
import '../../css/w/wj8pt-b4q.css';
import '../../css/d/d4e3dfxmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="a4hw9ib_n"/><path class="ydpokubwa"/><path class="vogjf-lhc"/><path class="wj8pt-b4q"/><path class="d4e3dfxmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:test-tube"} {...others} />);
}

export default Component;
