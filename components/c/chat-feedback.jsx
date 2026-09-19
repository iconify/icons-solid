import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nzz_habtr.css';
import '../../css/m/m5r2ewbsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nzz_habtr"/><path class="m5r2ewbsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-feedback"} {...others} />);
}

export default Component;
