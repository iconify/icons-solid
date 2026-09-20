import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lt79-dbim.css';
import '../../css/y/ywprslb-b.css';
import '../../css/d/dup_gbchp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lt79-dbim"/><path class="ywprslb-b"/><path clip-rule="evenodd" class="dup_gbchp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:globe2-filled"} {...others} />);
}

export default Component;
