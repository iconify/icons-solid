import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gticpgw9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gticpgw9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:friends-of-hue-aurora-dimmer-switch"} {...others} />);
}

export default Component;
