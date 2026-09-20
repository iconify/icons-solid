import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bei3qrbsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bei3qrbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:text-to-speech-fill"} {...others} />);
}

export default Component;
