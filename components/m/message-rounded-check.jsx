import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oe50l7uuy.css';
import '../../css/q/qmnttjbuc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oe50l7uuy"/><path class="qmnttjbuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:message-rounded-check"} {...others} />);
}

export default Component;
