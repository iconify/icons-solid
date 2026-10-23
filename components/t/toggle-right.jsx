import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/omvet-b0y.css';
import '../../css/q/q6litmbnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="omvet-b0y"/><path class="q6litmbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:toggle-right"} {...others} />);
}

export default Component;
