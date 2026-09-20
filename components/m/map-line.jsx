import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v45t3ubcm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v45t3ubcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:map-line"} {...others} />);
}

export default Component;
