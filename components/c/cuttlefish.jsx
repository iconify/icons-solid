import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l704x-bey.css';

const viewBox = {"width":440,"height":512};
const content = `<path class="l704x-bey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:cuttlefish"} {...others} />);
}

export default Component;
