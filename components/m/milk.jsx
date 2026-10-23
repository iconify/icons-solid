import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eg6f4tbmd.css';
import '../../css/v/vcecsni6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eg6f4tbmd"/><path class="vcecsni6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:milk"} {...others} />);
}

export default Component;
