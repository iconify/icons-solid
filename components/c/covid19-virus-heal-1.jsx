import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b9nw66bsr.css';
import '../../css/l/lqlm572ur.css';
import '../../css/r/rwz-1vx6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b9nw66bsr"/><path class="lqlm572ur"/><path class="rwz-1vx6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid19-virus-heal-1"} {...others} />);
}

export default Component;
