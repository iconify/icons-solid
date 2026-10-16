import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vu7zgc8gt.css';
import '../../css/d/dqapyabwu.css';
import '../../css/t/tke4h5b0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vu7zgc8gt"/><circle class="dqapyabwu"/><circle class="tke4h5b0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:eighth-notes"} {...others} />);
}

export default Component;
