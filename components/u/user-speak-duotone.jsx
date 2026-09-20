import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jdufm-bkt.css';
import '../../css/i/ine028bnv.css';
import '../../css/a/ancheq7bz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jdufm-bkt"/><path class="ine028bnv"/><path class="ancheq7bz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-speak-duotone"} {...others} />);
}

export default Component;
