import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p-sqx5bia.css';
import '../../css/j/jaegigb3l.css';
import '../../css/n/n-57f94mt.css';
import '../../css/w/wahuf72hz.css';
import '../../css/q/qipx3tbli.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="p-sqx5bia wm-shadow"/><path class="jaegigb3l"/><path class="n-57f94mt"/><path class="wahuf72hz"/><path class="qipx3tbli"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bot-off"} {...others} />);
}

export default Component;
