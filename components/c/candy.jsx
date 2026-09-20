import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/roirlnb4m.css';
import '../../css/c/cy_8ufpuf.css';
import '../../css/x/xc7-d2fex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="roirlnb4m"/><path class="cy_8ufpuf"/><path class="xc7-d2fex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:candy"} {...others} />);
}

export default Component;
