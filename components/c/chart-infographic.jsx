import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vvxbjgbna.css';
import '../../css/z/z2dp0tcjb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vvxbjgbna"/><path class="z2dp0tcjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-infographic"} {...others} />);
}

export default Component;
