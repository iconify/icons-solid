import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/o7greeb4r.css';
import '../../css/p/pgsx8ub-o.css';
import '../../css/z/zngrk6exs.css';
import '../../css/l/l9ryh3gjv.css';
import '../../css/b/bnmm1dbcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="o7greeb4r"/><path class="pgsx8ub-o"/><path class="zngrk6exs"/></g><path class="l9ryh3gjv"/><path class="bnmm1dbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-collapse-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
