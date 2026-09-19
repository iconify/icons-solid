import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/e/egeipg6gv.css';
import '../../css/g/ghy2e2bfl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="egeipg6gv"/><path class="ghy2e2bfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chart-pie"} {...others} />);
}

export default Component;
