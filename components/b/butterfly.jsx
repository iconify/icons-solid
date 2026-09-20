import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjp3d4bta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gjp3d4bta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:butterfly"} {...others} />);
}

export default Component;
