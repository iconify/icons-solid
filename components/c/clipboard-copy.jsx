import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nxuli2byx.css';
import '../../css/p/py4_t0ekw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nxuli2byx"/><path class="py4_t0ekw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:clipboard-copy"} {...others} />);
}

export default Component;
