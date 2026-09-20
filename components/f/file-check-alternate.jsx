import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u-opbqb_r.css';
import '../../css/m/mqxpji4_t.css';
import '../../css/j/j4kpp5b_c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="u-opbqb_r"/><path class="mqxpji4_t"/><path class="j4kpp5b_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:file-check-alternate"} {...others} />);
}

export default Component;
