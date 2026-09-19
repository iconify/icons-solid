import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qy4pgcc_r.css';
import '../../css/n/n41_c76an.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qy4pgcc_r"/><path class="n41_c76an"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:adobe-indesign"} {...others} />);
}

export default Component;
