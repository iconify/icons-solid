import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1s_2gu_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s1s_2gu_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:star-off-fill"} {...others} />);
}

export default Component;
