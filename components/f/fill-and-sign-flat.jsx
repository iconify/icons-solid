import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qu86w4bvc.css';
import '../../css/a/a4e97ibqx.css';
import '../../css/q/qqswkobpk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qu86w4bvc"/><path class="a4e97ibqx"/><path clip-rule="evenodd" class="qqswkobpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fill-and-sign-flat"} {...others} />);
}

export default Component;
