import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw50q5sdt.css';
import '../../css/t/tcsakibxe.css';
import '../../css/x/xoc373bcy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aw50q5sdt"/><path class="tcsakibxe"/><path class="xoc373bcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-filing"} {...others} />);
}

export default Component;
