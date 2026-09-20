import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h0-nxrdnm.css';
import '../../css/k/k2sffac4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h0-nxrdnm"/><path class="k2sffac4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-up3"} {...others} />);
}

export default Component;
