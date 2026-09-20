import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyk6nx-dd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iyk6nx-dd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:equalizer-line"} {...others} />);
}

export default Component;
