import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pa7yzpbyc.css';
import '../../css/b/bn-2pebwd.css';
import '../../css/s/srwmimt6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pa7yzpbyc"/><path class="bn-2pebwd"/><path class="srwmimt6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:sticky-notes"} {...others} />);
}

export default Component;
