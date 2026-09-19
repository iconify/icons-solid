import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jm11y1rnv.css';
import '../../css/c/cmgsz-b7t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jm11y1rnv"/><path class="cmgsz-b7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-journal"} {...others} />);
}

export default Component;
