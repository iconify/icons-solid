import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u9nfjuz7x.css';
import '../../css/m/m4buqzjcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u9nfjuz7x"/><path class="m4buqzjcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:image-upscale"} {...others} />);
}

export default Component;
