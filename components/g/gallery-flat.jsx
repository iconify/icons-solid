import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp-cvccnn.css';
import '../../css/n/n3igo1b3e.css';
import '../../css/j/jjdo8bbzh.css';
import '../../css/k/k8t1yyboi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mp-cvccnn"/><path clip-rule="evenodd" class="n3igo1b3e"/><path clip-rule="evenodd" class="jjdo8bbzh"/><path class="k8t1yyboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:gallery-flat"} {...others} />);
}

export default Component;
