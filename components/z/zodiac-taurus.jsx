import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vmlu0wb_n.css';
import '../../css/o/o_sn98buj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vmlu0wb_n"/><path class="o_sn98buj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:zodiac-taurus"} {...others} />);
}

export default Component;
