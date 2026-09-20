import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/av2gbrbdj.css';
import '../../css/t/tv1re9-xj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="av2gbrbdj"/><path class="tv1re9-xj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:armchair-2-off"} {...others} />);
}

export default Component;
