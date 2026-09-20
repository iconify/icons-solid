import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnsfc7b1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tnsfc7b1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:code-greater-than"} {...others} />);
}

export default Component;
