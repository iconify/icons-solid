import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxfyl1b5k.css';
import '../../css/g/g-1ion60j.css';
import '../../css/v/vz812pbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="info-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="oxfyl1b5k"/><path clip-rule="evenodd" class="g-1ion60j"/><path class="vz812pbmd"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:info-outline"} {...others} />);
}

export default Component;
