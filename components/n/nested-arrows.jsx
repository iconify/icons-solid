import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kcg668zpi.css';
import '../../css/i/ig8gsfbeh.css';
import '../../css/e/e9olh2zok.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="kcg668zpi"/><path class="ig8gsfbeh"/><path class="e9olh2zok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:nested-arrows"} {...others} />);
}

export default Component;
