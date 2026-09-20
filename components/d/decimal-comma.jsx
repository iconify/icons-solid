import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd11ey-ss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cd11ey-ss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:decimal-comma"} {...others} />);
}

export default Component;
