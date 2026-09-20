import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kobw_0jsc.css';
import '../../css/e/eawuabc1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kobw_0jsc"/><path class="eawuabc1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:houses"} {...others} />);
}

export default Component;
