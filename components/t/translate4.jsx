import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gauq9o90x.css';
import '../../css/v/v2wnnac1u.css';
import '../../css/n/nvtag-bqc.css';
import '../../css/s/sxos_7ben.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gauq9o90x"/><path class="v2wnnac1u"/><path class="nvtag-bqc"/><path class="sxos_7ben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:translate4"} {...others} />);
}

export default Component;
