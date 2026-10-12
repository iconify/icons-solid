import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/euynafocq.css';
import '../../css/z/zwgax5b6y.css';
import '../../css/a/abf5ubrqq.css';
import '../../css/q/qzm1q-b2s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="euynafocq"/><path class="zwgax5b6y"/><path class="abf5ubrqq"/><path class="qzm1q-b2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:town-hall-20"} {...others} />);
}

export default Component;
