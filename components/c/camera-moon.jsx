import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/de85zrb5x.css';
import '../../css/z/zrqpb1bip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="de85zrb5x"/><path class="zrqpb1bip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-moon"} {...others} />);
}

export default Component;
