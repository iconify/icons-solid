import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t47ud5bbm.css';
import '../../css/z/zhrn__bdx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t47ud5bbm"/><path class="zhrn__bdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:monitor-cog"} {...others} />);
}

export default Component;
