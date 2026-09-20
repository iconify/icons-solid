import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gwg-y3bus.css';
import '../../css/t/t22me5f7h.css';
import '../../css/o/ost3o95wd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gwg-y3bus"/><path class="t22me5f7h"/><path class="ost3o95wd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-line-duotone"} {...others} />);
}

export default Component;
