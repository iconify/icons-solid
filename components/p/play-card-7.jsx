import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oomezrlgn.css';
import '../../css/q/q95dfl5vo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oomezrlgn"/><path class="q95dfl5vo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:play-card-7"} {...others} />);
}

export default Component;
