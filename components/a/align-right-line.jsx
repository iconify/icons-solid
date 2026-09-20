import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f3r6jjb4a.css';
import '../../css/w/wd0d19c5p.css';
import '../../css/q/qvcnntb-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f3r6jjb4a"/><rect class="wd0d19c5p"/><rect class="qvcnntb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:align-right-line"} {...others} />);
}

export default Component;
