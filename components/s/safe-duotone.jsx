import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e5uzaw6kb.css';
import '../../css/x/xpzro9uft.css';
import '../../css/g/gomzfyb9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e5uzaw6kb"/><path clip-rule="evenodd" class="xpzro9uft"/><path clip-rule="evenodd" class="gomzfyb9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:safe-duotone"} {...others} />);
}

export default Component;
