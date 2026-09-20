import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oruz1_utz.css';
import '../../css/r/r7ywcbbwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="oruz1_utz"/><path class="r7ywcbbwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:music-3"} {...others} />);
}

export default Component;
