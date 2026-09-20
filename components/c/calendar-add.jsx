import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/p/pcbu8kb2s.css';
import '../../css/s/sj1_gtb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="pcbu8kb2s"/><path class="sj1_gtb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:calendar-add"} {...others} />);
}

export default Component;
