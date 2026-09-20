import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t99fn8lrk.css';
import '../../css/c/cna8fmbzc.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="t99fn8lrk"/><path class="cna8fmbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:teabag"} {...others} />);
}

export default Component;
