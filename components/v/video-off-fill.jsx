import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmgaybccy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wmgaybccy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:video-off-fill"} {...others} />);
}

export default Component;
