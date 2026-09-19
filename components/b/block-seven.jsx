import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/c/c_t74dp4a.css';
import '../../css/b/bo47x_htg.css';
import '../../css/b/bbxcluyzs.css';
import '../../css/l/lewwhobzy.css';
import '../../css/n/nok-9wbgu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="c_t74dp4a"/><path class="bo47x_htg"/><path class="bbxcluyzs"/><path class="lewwhobzy"/><path class="nok-9wbgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:block-seven"} {...others} />);
}

export default Component;
