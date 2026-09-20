import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwv0ewblt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qwv0ewblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:zodiac-sagittarius"} {...others} />);
}

export default Component;
