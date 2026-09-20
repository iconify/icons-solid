import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/o328-gbfi.css';
import '../../css/i/ia66voywb.css';
import '../../css/r/rpf22vb-r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="o328-gbfi"/><path class="ia66voywb"/><path class="rpf22vb-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:upload-box-1"} {...others} />);
}

export default Component;
