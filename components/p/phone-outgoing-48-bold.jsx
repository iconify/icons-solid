import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5idgqqvy.css';
import '../../css/b/b2ubuucrp.css';
import '../../css/q/qfey2lb7e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b5idgqqvy"/><path class="b2ubuucrp"/><path class="qfey2lb7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-outgoing-48-bold"} {...others} />);
}

export default Component;
