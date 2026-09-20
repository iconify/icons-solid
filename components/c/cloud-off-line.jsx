import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om5-2ls3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="om5-2ls3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:cloud-off-line"} {...others} />);
}

export default Component;
