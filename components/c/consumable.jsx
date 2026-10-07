import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lj4xe-vyq.css';
import '../../css/y/yngtobcdp.css';
import '../../css/r/raupfd0_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lj4xe-vyq"/><path class="yngtobcdp"/><path class="raupfd0_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:consumable"} {...others} />);
}

export default Component;
