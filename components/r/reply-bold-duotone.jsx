import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l7_snwbky.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/b/b508hdoqi.css';
import '../../css/s/ss7zqegju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l7_snwbky"/><g class="mc2zb0bvp"><path class="b508hdoqi"/><path class="ss7zqegju"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reply-bold-duotone"} {...others} />);
}

export default Component;
