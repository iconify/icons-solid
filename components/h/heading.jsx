import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kbm5ejlhj.css';
import '../../css/p/p598gbcpi.css';
import '../../css/h/h38drbc1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kbm5ejlhj"/><path class="p598gbcpi"/><path class="h38drbc1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:heading"} {...others} />);
}

export default Component;
