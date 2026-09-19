import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xv6dojbxw.css';
import '../../css/p/pchy-4bkg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="xv6dojbxw"/><path class="pchy-4bkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:exposure"} {...others} />);
}

export default Component;
