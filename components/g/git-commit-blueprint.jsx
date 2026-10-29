import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/ltcazkbqu.css';
import '../../css/t/tp-yo7b2q.css';
import '../../css/a/aaymibb1x.css';
import '../../css/d/d6i3s2dnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ltcazkbqu wm-deco"/><path class="tp-yo7b2q wm-deco"/><path class="aaymibb1x wm-k"/><path class="d6i3s2dnz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-commit-blueprint"} {...others} />);
}

export default Component;
