import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tc102wbsi.css';
import '../../css/n/nkti06nzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tc102wbsi"/><path class="nkti06nzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:monitor-speaker"} {...others} />);
}

export default Component;
