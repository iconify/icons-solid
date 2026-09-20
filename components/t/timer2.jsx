import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/trkv2chlt.css';
import '../../css/k/ke7d84ibd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="trkv2chlt"/><path class="ke7d84ibd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:timer2"} {...others} />);
}

export default Component;
