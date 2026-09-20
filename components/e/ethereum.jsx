import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwnj5k5sb.css';
import '../../css/b/b7mwlnblu.css';

const viewBox = {"width":65,"height":64};
const content = `<path class="rwnj5k5sb"/><path class="b7mwlnblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:ethereum"} {...others} />);
}

export default Component;
