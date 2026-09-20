import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sft3gqb2b.css';
import '../../css/h/hkp4q6bsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sft3gqb2b"/><path class="hkp4q6bsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:move-3d"} {...others} />);
}

export default Component;
