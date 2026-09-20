import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sjniipb-f.css';
import '../../css/x/xejfo7bwe.css';
import '../../css/z/zia3czbog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sjniipb-f"/><path class="xejfo7bwe"/><path class="zia3czbog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paint-brush-bold"} {...others} />);
}

export default Component;
