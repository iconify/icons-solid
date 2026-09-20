import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muzwcal8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="muzwcal8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:hand-back-right-outline"} {...others} />);
}

export default Component;
