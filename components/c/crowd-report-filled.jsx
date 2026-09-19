import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ws9aemb-h.css';
import '../../css/m/mkjrunb1f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ws9aemb-h"/><path class="mkjrunb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:crowd-report-filled"} {...others} />);
}

export default Component;
