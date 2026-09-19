import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6_cvul6v.css';
import '../../css/b/bo2v11vwg.css';
import '../../css/n/n7haok96c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q6_cvul6v"/><path class="bo2v11vwg"/><path class="n7haok96c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:meatonbone"} {...others} />);
}

export default Component;
