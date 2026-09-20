import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f9kfjgbxq.css';
import '../../css/q/q1y4cdbvh.css';
import '../../css/w/wd6v8jb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="f9kfjgbxq"/><path class="q1y4cdbvh"/><path class="wd6v8jb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:phone-call-filled"} {...others} />);
}

export default Component;
