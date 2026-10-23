import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zqkchcces.css';
import '../../css/z/zog6wromu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zqkchcces"/><path class="zog6wromu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:hotel"} {...others} />);
}

export default Component;
