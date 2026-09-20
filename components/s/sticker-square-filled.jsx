import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dp52pcgzw.css';
import '../../css/p/pnhik0--j.css';
import '../../css/i/ig1ma7bdm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dp52pcgzw"/><path class="pnhik0--j"/><path class="ig1ma7bdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sticker-square-filled"} {...others} />);
}

export default Component;
