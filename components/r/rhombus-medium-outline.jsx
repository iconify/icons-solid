import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjhj_nbzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kjhj_nbzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:rhombus-medium-outline"} {...others} />);
}

export default Component;
