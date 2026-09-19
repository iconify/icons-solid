import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcq1b5bna.css';
import '../../css/t/t5mpfkbee.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pcq1b5bna"/><path clip-rule="evenodd" class="t5mpfkbee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:notification-off-outline"} {...others} />);
}

export default Component;
