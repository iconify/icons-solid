import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eplpgs1zp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eplpgs1zp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:microphone-help-outline"} {...others} />);
}

export default Component;
