import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n90tau3hd.css';
import '../../css/g/ggkp43bmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n90tau3hd"/><path class="ggkp43bmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-cancel"} {...others} />);
}

export default Component;
