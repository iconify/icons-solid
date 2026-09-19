import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jym9c9k8y.css';
import '../../css/s/sfsz-pbjn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="jym9c9k8y"/><path class="sfsz-pbjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:left-expand"} {...others} />);
}

export default Component;
