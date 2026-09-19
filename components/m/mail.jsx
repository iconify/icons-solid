import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/s/sh_k0kbjl.css';
import '../../css/t/t27kzjtxh.css';
import '../../css/f/fl3lhjceg.css';
import '../../css/e/e303g4b7x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="sh_k0kbjl"/><path class="t27kzjtxh"/><path class="fl3lhjceg"/><path class="e303g4b7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mail"} {...others} />);
}

export default Component;
