import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny7pffhya.css';
import '../../css/h/h4zwanbgt.css';
import '../../css/e/e39ud6bwf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ny7pffhya"/><path class="h4zwanbgt"/><circle class="e39ud6bwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cd-archive"} {...others} />);
}

export default Component;
