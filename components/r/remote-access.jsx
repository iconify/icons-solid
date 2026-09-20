import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/x/xb1umdb7a.css';
import '../../css/j/jp0h4bekv.css';
import '../../css/n/n0ps3j8mv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="xb1umdb7a"/><path class="jp0h4bekv"/><path class="n0ps3j8mv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:remote-access"} {...others} />);
}

export default Component;
