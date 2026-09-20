import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oam1m3jkt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oam1m3jkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:shul-outline"} {...others} />);
}

export default Component;
