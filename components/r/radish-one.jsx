import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uiuyxo1yk.css';
import '../../css/m/m9ovsacva.css';
import '../../css/k/km64vnbvm.css';
import '../../css/o/oskonbbeh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="uiuyxo1yk"/><path class="m9ovsacva"/><path class="km64vnbvm"/><path class="oskonbbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:radish-one"} {...others} />);
}

export default Component;
