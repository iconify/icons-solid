import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/osbldktkr.css';
import '../../css/n/nqmqffbvv.css';
import '../../css/d/dytwysbcm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="osbldktkr"/><path class="nqmqffbvv"/><path class="dytwysbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gamepad-charge-duotone"} {...others} />);
}

export default Component;
