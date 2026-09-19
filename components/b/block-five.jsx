import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/b/bs3iw2bus.css';
import '../../css/c/c_t74dp4a.css';
import '../../css/f/f_1js0uww.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="bs3iw2bus"/><path class="c_t74dp4a"/><path class="f_1js0uww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:block-five"} {...others} />);
}

export default Component;
