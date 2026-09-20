import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gf78lfbxf.css';
import '../../css/i/iz51_jbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gf78lfbxf"/><path class="iz51_jbpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:vector-bezier-2"} {...others} />);
}

export default Component;
