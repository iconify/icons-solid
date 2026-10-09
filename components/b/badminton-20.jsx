import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fha4pdfyp.css';
import '../../css/r/r9o8-5b4i.css';
import '../../css/e/eng9yvngw.css';
import '../../css/x/xioe6dzyx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fha4pdfyp"/><path class="r9o8-5b4i"/><path class="eng9yvngw"/><path class="xioe6dzyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:badminton-20"} {...others} />);
}

export default Component;
