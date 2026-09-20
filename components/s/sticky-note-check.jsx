import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eayhk_bcx.css';
import '../../css/q/q-frw9b4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eayhk_bcx"/><path class="q-frw9b4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:sticky-note-check"} {...others} />);
}

export default Component;
