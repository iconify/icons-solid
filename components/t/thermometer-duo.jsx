import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8vpysbgw.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r8hlyibay.css';
import '../../css/y/yxdu62y1f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b8vpysbgw secondary"/><g class="dt0cm9dhy primary"><path class="r8hlyibay"/><path class="yxdu62y1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:thermometer-duo"} {...others} />);
}

export default Component;
