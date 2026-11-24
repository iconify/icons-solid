import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gk1iewbti.css';
import '../../css/q/ql1midcyw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gk1iewbti"/><path class="ql1midcyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:globe-off-filled"} {...others} />);
}

export default Component;
