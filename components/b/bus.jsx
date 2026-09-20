import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/j/j_wo3ntur.css';
import '../../css/a/a08vxcbvf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="j_wo3ntur"/><path class="a08vxcbvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bus"} {...others} />);
}

export default Component;
