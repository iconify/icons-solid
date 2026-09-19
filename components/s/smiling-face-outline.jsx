import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omcviu_cr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="omcviu_cr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:smiling-face-outline"} {...others} />);
}

export default Component;
