import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcf77kb6k.css';
import '../../css/d/dvc0m-b_k.css';
import '../../css/i/ibhh__y8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rcf77kb6k wm-k"/><path class="dvc0m-b_k wm-a"/><path class="ibhh__y8v wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bike"} {...others} />);
}

export default Component;
