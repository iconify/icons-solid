import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aao18s30f.css';
import '../../css/g/ggv4rvbar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aao18s30f"/><path class="ggv4rvbar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-star"} {...others} />);
}

export default Component;
