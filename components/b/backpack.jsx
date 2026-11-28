import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fpsfjnbsx.css';
import '../../css/y/ybaa2ib6j.css';
import '../../css/u/uzchd2xdt.css';
import '../../css/f/f51c_v3qc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fpsfjnbsx"/><path class="ybaa2ib6j"/><path class="uzchd2xdt"/><path class="f51c_v3qc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:backpack"} {...others} />);
}

export default Component;
