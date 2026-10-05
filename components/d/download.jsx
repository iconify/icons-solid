import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/i6psyz68x.css';
import '../../css/o/o6ain5brh.css';
import '../../css/p/p_u131ihg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="i6psyz68x"/><path class="o6ain5brh"/><path class="p_u131ihg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:download"} {...others} />);
}

export default Component;
