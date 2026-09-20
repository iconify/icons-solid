import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vwasf1fzc.css';
import '../../css/e/elti8xbhv.css';
import '../../css/x/xizglbc3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="vwasf1fzc"/><circle class="elti8xbhv"/><path class="xizglbc3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tablets"} {...others} />);
}

export default Component;
