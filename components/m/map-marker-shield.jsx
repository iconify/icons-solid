import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsi7l1byg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hsi7l1byg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:map-marker-shield"} {...others} />);
}

export default Component;
