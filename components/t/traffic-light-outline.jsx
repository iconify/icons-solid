import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/za8-l6cso.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="za8-l6cso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:traffic-light-outline"} {...others} />);
}

export default Component;
