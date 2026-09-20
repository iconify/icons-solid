import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml4h4gbtq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ml4h4gbtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cloudy-night-rain-filled"} {...others} />);
}

export default Component;
