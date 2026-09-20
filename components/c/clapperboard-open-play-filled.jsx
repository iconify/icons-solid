import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/phkyuccmo.css';
import '../../css/z/zwp75ob4l.css';
import '../../css/h/hv1qebcfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="phkyuccmo"/><path clip-rule="evenodd" class="zwp75ob4l"/><path class="hv1qebcfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:clapperboard-open-play-filled"} {...others} />);
}

export default Component;
