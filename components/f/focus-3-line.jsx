import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpd_f5y1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jpd_f5y1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:focus-3-line"} {...others} />);
}

export default Component;
