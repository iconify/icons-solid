import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4mnxrcmq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w4mnxrcmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:projector-2-line"} {...others} />);
}

export default Component;
