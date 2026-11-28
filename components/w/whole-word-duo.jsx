import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nc6x_8gnc.css';
import '../../css/r/r_82qdbxl.css';
import '../../css/y/ym8-6c8tp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="nc6x_8gnc"/><path class="r_82qdbxl"/><path class="ym8-6c8tp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:whole-word-duo"} {...others} />);
}

export default Component;
