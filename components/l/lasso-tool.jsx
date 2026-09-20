import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfumgw-x.css';
import '../../css/m/m66i2jztc.css';
import '../../css/e/e__fwbcqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ezfumgw-x"><path class="m66i2jztc"/><path class="e__fwbcqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:lasso-tool"} {...others} />);
}

export default Component;
