import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ws5a_qbia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ws5a_qbia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:water-sanitation-24px"} {...others} />);
}

export default Component;
