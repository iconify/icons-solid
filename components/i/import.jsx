import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/v/v5yammbrs.css';
import '../../css/c/cl21r6-zy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="v5yammbrs"/><path class="cl21r6-zy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:import"} {...others} />);
}

export default Component;
