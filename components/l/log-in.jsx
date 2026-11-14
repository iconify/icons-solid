import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d8rxw_b0f.css';
import '../../css/y/yw-yhjbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d8rxw_b0f"/><path class="yw-yhjbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:log-in"} {...others} />);
}

export default Component;
