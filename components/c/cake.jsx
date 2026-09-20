import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qlmhlwkct.css';
import '../../css/h/hxrc2qk-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qlmhlwkct"/><path class="hxrc2qk-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cake"} {...others} />);
}

export default Component;
