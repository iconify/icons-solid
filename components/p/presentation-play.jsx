import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm_7tdbzq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nm_7tdbzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:presentation-play"} {...others} />);
}

export default Component;
