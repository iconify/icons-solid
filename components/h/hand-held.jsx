import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/x7tri2bmi.css';
import '../../css/f/fuz56yuih.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="x7tri2bmi"/><path class="fuz56yuih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:hand-held"} {...others} />);
}

export default Component;
