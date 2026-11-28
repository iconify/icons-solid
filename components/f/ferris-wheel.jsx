import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j428c8brj.css';
import '../../css/i/idzgw3hsy.css';
import '../../css/t/tkytk3yzv.css';
import '../../css/u/uwg2kpted.css';
import '../../css/l/ledzyix_v.css';
import '../../css/w/wuqxetbax.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="j428c8brj"/><path class="idzgw3hsy"/><path class="tkytk3yzv"/><path class="uwg2kpted"/><path class="ledzyix_v"/><path class="wuqxetbax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ferris-wheel"} {...others} />);
}

export default Component;
