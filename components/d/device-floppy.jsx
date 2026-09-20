import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x1f8_pvxr.css';
import '../../css/r/r63usobks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x1f8_pvxr"/><path class="r63usobks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-floppy"} {...others} />);
}

export default Component;
