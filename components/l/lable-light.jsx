import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lwy3kjbdk.css';
import '../../css/n/nmur6okjy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="lwy3kjbdk"/><circle class="nmur6okjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:lable-light"} {...others} />);
}

export default Component;
