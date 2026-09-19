import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/g/g-vmp1bpt.css';
import '../../css/t/tdirdccsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="g-vmp1bpt"/><path class="tdirdccsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:playlist-repeat-song-duotone"} {...others} />);
}

export default Component;
