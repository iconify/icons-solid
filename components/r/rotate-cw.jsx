import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xehqfdynx.css';
import '../../css/q/qrq72_-8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xehqfdynx"/><path class="qrq72_-8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:rotate-cw"} {...others} />);
}

export default Component;
