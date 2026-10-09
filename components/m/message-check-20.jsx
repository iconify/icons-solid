import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh8pb8bip.css';
import '../../css/i/iq88sthgv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xh8pb8bip"/><path class="iq88sthgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-check-20"} {...others} />);
}

export default Component;
