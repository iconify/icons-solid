import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/uw5095hhm.css';
import '../../css/h/h549j8bsx.css';
import '../../css/a/aes-akrzs.css';
import '../../css/r/rhrw8lbls.css';
import '../../css/m/mz0julbdy.css';
import '../../css/k/koimzu-se.css';
import '../../css/m/mpsoji8rp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="uw5095hhm"/><path class="h549j8bsx"/><path class="aes-akrzs"/><path class="rhrw8lbls"/><path class="mz0julbdy"/><path class="koimzu-se"/><path class="mpsoji8rp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:analysis"} {...others} />);
}

export default Component;
