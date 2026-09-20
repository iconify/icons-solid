import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/kpokh7e_t.css';
import '../../css/e/ey-w_vbnf.css';
import '../../css/u/ukoe6ib7t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="kpokh7e_t"/><path class="ey-w_vbnf"/><path class="ukoe6ib7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:galaxy-2"} {...others} />);
}

export default Component;
