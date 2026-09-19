import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smig3ccbw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smig3ccbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:motion-sensor-luminance"} {...others} />);
}

export default Component;
