import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/x4lzuxfnp.css';
import '../../css/o/od1m0pbpv.css';
import '../../css/y/y8z_0dbuj.css';
import '../../css/h/htjk3go1e.css';
import '../../css/a/a8zqczblx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="x4lzuxfnp"/><path class="od1m0pbpv"/><path class="y8z_0dbuj"/><path class="htjk3go1e"/><path class="a8zqczblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:display"} {...others} />);
}

export default Component;
