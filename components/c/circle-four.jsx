import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/q/qecs0wskw.css';
import '../../css/d/dzlzt3bvm.css';
import '../../css/x/xr90nj5ns.css';
import '../../css/k/knwmkzcwg.css';
import '../../css/j/jp5pkd-gs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path clip-rule="evenodd" class="qecs0wskw"/><path clip-rule="evenodd" class="dzlzt3bvm"/><path clip-rule="evenodd" class="xr90nj5ns"/><path clip-rule="evenodd" class="knwmkzcwg"/><path class="jp5pkd-gs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:circle-four"} {...others} />);
}

export default Component;
