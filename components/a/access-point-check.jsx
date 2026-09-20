import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ar_t8vl9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ar_t8vl9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:access-point-check"} {...others} />);
}

export default Component;
