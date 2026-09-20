import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxpdmv6kz.css';
import '../../css/x/xug629bwe.css';
import '../../css/a/a-nja-bsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="oxpdmv6kz"/><path clip-rule="evenodd" class="xug629bwe"/><path class="a-nja-bsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:command-duotone"} {...others} />);
}

export default Component;
