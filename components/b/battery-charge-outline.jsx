import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwirp0b1q.css';
import '../../css/e/efcc7ncew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qwirp0b1q"/><path clip-rule="evenodd" class="efcc7ncew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-charge-outline"} {...others} />);
}

export default Component;
