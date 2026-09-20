import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk29gcbsq.css';
import '../../css/k/ktus5xkah.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qk29gcbsq"/><path clip-rule="evenodd" class="ktus5xkah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:pdf-solid"} {...others} />);
}

export default Component;
