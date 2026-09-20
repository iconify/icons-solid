import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xamdbob0v.css';
import '../../css/d/dkg5y-blo.css';
import '../../css/s/sfkdkpbkg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xamdbob0v"/><path class="dkg5y-blo"/><path clip-rule="evenodd" class="sfkdkpbkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:text-duotone"} {...others} />);
}

export default Component;
