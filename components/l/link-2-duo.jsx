import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zo9q0obuy.css';
import '../../css/t/tfm-ntb4w.css';
import '../../css/u/u-w8q3b3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zo9q0obuy"/><path class="tfm-ntb4w"/><path class="u-w8q3b3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:link-2-duo"} {...others} />);
}

export default Component;
