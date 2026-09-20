import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtkmz5qzd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gtkmz5qzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-left-circle-outline"} {...others} />);
}

export default Component;
