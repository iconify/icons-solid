import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/k/kwihl41ci.css';
import '../../css/q/ql-u4mbqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="shu3xdl9q"/><path class="kwihl41ci"/><path class="ql-u4mbqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:soccer-ball"} {...others} />);
}

export default Component;
