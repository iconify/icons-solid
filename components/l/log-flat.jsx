import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vqlw4u9sa.css';
import '../../css/o/oh78i5bhe.css';
import '../../css/a/a2gmfub_v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vqlw4u9sa"/><path class="oh78i5bhe"/><path clip-rule="evenodd" class="a2gmfub_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:log-flat"} {...others} />);
}

export default Component;
