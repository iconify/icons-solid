import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wascf2ujt.css';
import '../../css/w/wee2qvrei.css';
import '../../css/t/timostb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wascf2ujt"/><path class="wee2qvrei"/><path class="timostb6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:color-filter"} {...others} />);
}

export default Component;
