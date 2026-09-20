import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz-bawb8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pz-bawb8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:go-kart-track"} {...others} />);
}

export default Component;
