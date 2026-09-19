import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o93hmcaib.css';
import '../../css/q/q6u6gfbgw.css';
import '../../css/q/q-052gbrv.css';
import '../../css/y/yiy3jjqui.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="o93hmcaib"/><path class="q6u6gfbgw"/><circle class="q-052gbrv"/><path class="yiy3jjqui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:disabled-picture"} {...others} />);
}

export default Component;
