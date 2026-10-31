import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a-j_cgh-t.css';
import '../../css/x/xv8il5b2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a-j_cgh-t"/><path class="xv8il5b2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cpu-duocolor-round"} {...others} />);
}

export default Component;
