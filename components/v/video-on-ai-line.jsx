import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oux_cgbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oux_cgbkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:video-on-ai-line"} {...others} />);
}

export default Component;
