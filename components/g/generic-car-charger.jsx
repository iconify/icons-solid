import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm-x0nboc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xm-x0nboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:generic-car-charger"} {...others} />);
}

export default Component;
