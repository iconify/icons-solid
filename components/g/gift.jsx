import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b9-4_ibnd.css';
import '../../css/x/xyoxb65ol.css';
import '../../css/v/vnk69pgkm.css';
import '../../css/q/qtd3p_3xs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b9-4_ibnd"/><path class="xyoxb65ol"/><path class="vnk69pgkm"/><path class="qtd3p_3xs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gift"} {...others} />);
}

export default Component;
