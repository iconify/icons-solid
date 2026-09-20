import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iuub-958g.css';
import '../../css/f/frb_zpbsh.css';
import '../../css/g/g6-ji5mbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="iuub-958g"/><path class="frb_zpbsh"/><path clip-rule="evenodd" class="g6-ji5mbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:alarm-duotone"} {...others} />);
}

export default Component;
