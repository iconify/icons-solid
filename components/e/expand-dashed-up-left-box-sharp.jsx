import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdv4d22pr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qdv4d22pr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:expand-dashed-up-left-box-sharp"} {...others} />);
}

export default Component;
