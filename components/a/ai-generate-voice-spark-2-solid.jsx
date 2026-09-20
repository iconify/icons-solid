import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ity3c0bdu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ity3c0bdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ai-generate-voice-spark-2-solid"} {...others} />);
}

export default Component;
