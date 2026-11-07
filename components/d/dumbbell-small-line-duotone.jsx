import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c4811sh4p.css';
import '../../css/l/lxu2bbcju.css';
import '../../css/d/dnt50fg1x.css';
import '../../css/q/qevzqzytg.css';
import '../../css/b/byr08eb8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c4811sh4p"/><path class="lxu2bbcju"/><path class="dnt50fg1x"/><path class="qevzqzytg"/><path class="byr08eb8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-small-line-duotone"} {...others} />);
}

export default Component;
