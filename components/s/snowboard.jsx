import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zm5lfobfg.css';
import '../../css/j/j3cw0-77h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zm5lfobfg"/><path class="j3cw0-77h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:snowboard"} {...others} />);
}

export default Component;
