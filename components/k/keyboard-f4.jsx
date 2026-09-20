import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7d6ijtcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t7d6ijtcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:keyboard-f4"} {...others} />);
}

export default Component;
