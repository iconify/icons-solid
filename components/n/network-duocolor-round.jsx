import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ycao8bsrk.css';
import '../../css/o/ok0pdobun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ycao8bsrk"/><path class="ok0pdobun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:network-duocolor-round"} {...others} />);
}

export default Component;
