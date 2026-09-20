import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k6mo8actu.css';
import '../../css/h/hq_6i5iyq.css';
import '../../css/y/ywareo_of.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="k6mo8actu"/><path class="hq_6i5iyq"/><path class="ywareo_of"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:bill-dollar-1-flat"} {...others} />);
}

export default Component;
