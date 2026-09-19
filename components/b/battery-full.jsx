import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nv2wnob8f.css';
import '../../css/d/d55c2pbyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nv2wnob8f"/><path class="d55c2pbyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:battery-full"} {...others} />);
}

export default Component;
