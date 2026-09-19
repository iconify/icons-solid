import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mnu15ok9c.css';
import '../../css/m/my73ugmzy.css';
import '../../css/w/wz2quuang.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mnu15ok9c"/><path class="my73ugmzy"/><path class="wz2quuang"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:cloud-sync"} {...others} />);
}

export default Component;
