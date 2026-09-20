import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wo-3yupcx.css';
import '../../css/w/w2sd-063m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wo-3yupcx"/><path class="w2sd-063m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-crazy-happy"} {...others} />);
}

export default Component;
