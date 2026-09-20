import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh9qq4ypa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lh9qq4ypa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-square-off-sharp"} {...others} />);
}

export default Component;
