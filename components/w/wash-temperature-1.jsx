import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dms_ct-jp.css';
import '../../css/s/swvkhlb-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dms_ct-jp"/><path class="swvkhlb-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-temperature-1"} {...others} />);
}

export default Component;
