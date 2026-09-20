import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv0qo_yvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iv0qo_yvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:tooltip-check"} {...others} />);
}

export default Component;
