import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/c/c_t74dp4a.css';
import '../../css/b/bbxcluyzs.css';
import '../../css/b/bo47x_htg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="c_t74dp4a"/><path class="bbxcluyzs"/><path class="bo47x_htg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:block-six"} {...others} />);
}

export default Component;
