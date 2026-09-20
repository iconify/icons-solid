import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d-58jv42n.css';
import '../../css/y/ytjcrebpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d-58jv42n"/><path class="ytjcrebpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:ear-off"} {...others} />);
}

export default Component;
