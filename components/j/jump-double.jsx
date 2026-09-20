import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/m/mvxmopqep.css';
import '../../css/d/dz_6-qbgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="mvxmopqep"/><path class="dz_6-qbgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:jump-double"} {...others} />);
}

export default Component;
