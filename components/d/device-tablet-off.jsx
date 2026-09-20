import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a9p2nobjl.css';
import '../../css/y/yt99cwcyl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a9p2nobjl"/><path class="yt99cwcyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tablet-off"} {...others} />);
}

export default Component;
