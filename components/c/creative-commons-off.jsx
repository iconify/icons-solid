import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ytto-3_yv.css';
import '../../css/w/w8yc4zbns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ytto-3_yv"/><path class="w8yc4zbns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:creative-commons-off"} {...others} />);
}

export default Component;
