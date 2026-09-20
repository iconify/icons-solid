import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z9fy4wczv.css';
import '../../css/k/k5xzmd8wb.css';
import '../../css/a/awo1ve8ww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z9fy4wczv"/><path clip-rule="evenodd" class="k5xzmd8wb"/><path class="awo1ve8ww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cart4-duotone"} {...others} />);
}

export default Component;
