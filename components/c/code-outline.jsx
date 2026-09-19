import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/p/p0soagb_d.css';
import '../../css/x/xfv6obcwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="p0soagb_d"/><path class="xfv6obcwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:code-outline"} {...others} />);
}

export default Component;
