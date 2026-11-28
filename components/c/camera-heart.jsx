import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agw2k9bgg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="agw2k9bgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:camera-heart"} {...others} />);
}

export default Component;
