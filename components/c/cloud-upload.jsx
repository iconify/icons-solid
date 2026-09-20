import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wau1_4buh.css';
import '../../css/p/pmz69hbci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wau1_4buh"/><path class="pmz69hbci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:cloud-upload"} {...others} />);
}

export default Component;
