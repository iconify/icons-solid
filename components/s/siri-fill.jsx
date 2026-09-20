import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnku-pbna.css';
import '../../css/s/sqo3g6whm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pnku-pbna"/><path class="sqo3g6whm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:siri-fill"} {...others} />);
}

export default Component;
