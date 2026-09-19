import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qnnxl6bvc.css';
import '../../css/r/ray9_ac3o.css';
import '../../css/h/h_267dbvz.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="qnnxl6bvc"/><path class="ray9_ac3o"/><path class="h_267dbvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:it"} {...others} />);
}

export default Component;
