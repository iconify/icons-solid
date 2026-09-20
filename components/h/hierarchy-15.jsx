import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/olqttsbrn.css';
import '../../css/t/tj8-ut1cl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="olqttsbrn"/><path class="tj8-ut1cl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:hierarchy-15"} {...others} />);
}

export default Component;
