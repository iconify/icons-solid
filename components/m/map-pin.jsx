import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zg448ubtr.css';
import '../../css/w/wzxk12bdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zg448ubtr"/><path class="wzxk12bdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:map-pin"} {...others} />);
}

export default Component;
