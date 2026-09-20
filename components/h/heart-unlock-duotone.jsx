import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ebkksgjqf.css';
import '../../css/a/asozeacvw.css';
import '../../css/m/mx2jxjw2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ebkksgjqf"/><path clip-rule="evenodd" class="asozeacvw"/><path class="mx2jxjw2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:heart-unlock-duotone"} {...others} />);
}

export default Component;
