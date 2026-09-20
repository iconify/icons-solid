import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v7cxl3zwh.css';
import '../../css/e/ehw9fwbut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v7cxl3zwh"/><path class="ehw9fwbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:scroll"} {...others} />);
}

export default Component;
