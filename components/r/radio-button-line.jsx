import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtfq3bb6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rtfq3bb6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:radio-button-line"} {...others} />);
}

export default Component;
