import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q55-hx4eu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q55-hx4eu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:zodiac-libra"} {...others} />);
}

export default Component;
