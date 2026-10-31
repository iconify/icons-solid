import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovqg_nbjc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ovqg_nbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:waveform-sparkle-round"} {...others} />);
}

export default Component;
