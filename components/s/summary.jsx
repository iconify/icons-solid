import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uiemfw8fh.css';
import '../../css/e/edbeavb2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uiemfw8fh"/><path class="edbeavb2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:summary"} {...others} />);
}

export default Component;
