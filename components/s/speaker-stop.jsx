import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulzd8nbbd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ulzd8nbbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:speaker-stop"} {...others} />);
}

export default Component;
