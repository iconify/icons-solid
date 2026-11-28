import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qyvn42bbq.css';
import '../../css/t/t8x-nbhsm.css';
import '../../css/c/cxy8b7bmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qyvn42bbq"/><path class="t8x-nbhsm"/><path class="cxy8b7bmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:diamond-alert"} {...others} />);
}

export default Component;
