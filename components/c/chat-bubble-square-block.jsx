import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/o/o67v62d_y.css';
import '../../css/z/ztce-3tgz.css';
import '../../css/g/gzbbyac0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="o67v62d_y"/><path class="ztce-3tgz"/><path class="gzbbyac0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:chat-bubble-square-block"} {...others} />);
}

export default Component;
