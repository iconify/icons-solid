import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y-honm_li.css';
import '../../css/d/dq1ulvyil.css';
import '../../css/o/o8w0orrwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y-honm_li"/><path class="dq1ulvyil"/><path class="o8w0orrwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:science-molecule"} {...others} />);
}

export default Component;
