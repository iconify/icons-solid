import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owx_5mb2e.css';

const viewBox = {"width":20,"height":24};
const content = `<path class="owx_5mb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:paypal-p"} {...others} />);
}

export default Component;
