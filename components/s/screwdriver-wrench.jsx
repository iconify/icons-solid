import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/l/l_-sbgblz.css';
import '../../css/j/jqq1t27ga.css';
import '../../css/x/xv0ykz_es.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="l_-sbgblz"/><path class="jqq1t27ga"/><path class="xv0ykz_es"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:screwdriver-wrench"} {...others} />);
}

export default Component;
