import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/d/d3cup7bqo.css';
import '../../css/t/t0y2n_ocl.css';
import '../../css/q/qizly-baw.css';
import '../../css/k/ka34n31sy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="d3cup7bqo"/><path class="t0y2n_ocl"/><path class="qizly-baw"/><path class="ka34n31sy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:block-nine"} {...others} />);
}

export default Component;
