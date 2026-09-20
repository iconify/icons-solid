import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zz8xutbrl.css';
import '../../css/n/n49e6g5-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zz8xutbrl"/><path class="n49e6g5-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shuffle"} {...others} />);
}

export default Component;
