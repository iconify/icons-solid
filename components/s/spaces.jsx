import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nk-ja5bdx.css';
import '../../css/d/dfvj5ji8e.css';
import '../../css/b/bf57v-qce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nk-ja5bdx"/><path class="dfvj5ji8e"/><path class="bf57v-qce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:spaces"} {...others} />);
}

export default Component;
