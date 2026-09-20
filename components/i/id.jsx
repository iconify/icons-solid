import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p65dfactk.css';
import '../../css/o/otz-25byd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p65dfactk"/><path class="otz-25byd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:id"} {...others} />);
}

export default Component;
