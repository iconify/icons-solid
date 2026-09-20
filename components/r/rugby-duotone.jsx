import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x00hu81jd.css';
import '../../css/j/j5b-i65-f.css';
import '../../css/k/kmstajboc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="x00hu81jd"/><path class="j5b-i65-f"/><path clip-rule="evenodd" class="kmstajboc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:rugby-duotone"} {...others} />);
}

export default Component;
