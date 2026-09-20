import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2_xg2fqd.css';
import '../../css/z/z9rfyqosp.css';
import '../../css/b/b4p71pbzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n2_xg2fqd"/><path class="z9rfyqosp"/><path class="b4p71pbzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:spray-can"} {...others} />);
}

export default Component;
