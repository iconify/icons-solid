import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s32v0sbns.css';
import '../../css/a/ae0n5tbbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s32v0sbns"/><path class="ae0n5tbbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-up-to-arc"} {...others} />);
}

export default Component;
