import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6qv59w-v.css';
import '../../css/y/ypwg_3bxo.css';

const viewBox = {"width":1113,"height":1225};
const content = `<path class="x6qv59w-v"/><path class="ypwg_3bxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:howlerjs"} {...others} />);
}

export default Component;
