import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0gzk6brg.css';
import '../../css/e/ej7w26egc.css';
import '../../css/z/zjkpm8zfi.css';
import '../../css/d/d_yj8qt1e.css';
import '../../css/n/nzmsevbde.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j0gzk6brg"/><path class="ej7w26egc"/><path class="zjkpm8zfi"/><path class="d_yj8qt1e"/><path class="nzmsevbde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:umbrella"} {...others} />);
}

export default Component;
