import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oe7_vcbri.css';
import '../../css/i/i4ft-wb3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oe7_vcbri"/><path class="i4ft-wb3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tree-pine-duocolor-round"} {...others} />);
}

export default Component;
