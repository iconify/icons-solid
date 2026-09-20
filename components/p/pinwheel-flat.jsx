import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9h7p90fh.css';
import '../../css/o/ocsylrb5y.css';
import '../../css/c/c72gcb-tq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="z9h7p90fh"/><path clip-rule="evenodd" class="ocsylrb5y"/><path class="c72gcb-tq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pinwheel-flat"} {...others} />);
}

export default Component;
