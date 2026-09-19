import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c5xlswnoj.css';
import '../../css/t/tb7bjd3vj.css';
import '../../css/a/aovl4bbis.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="c5xlswnoj"/><path class="tb7bjd3vj"/><path class="aovl4bbis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:icecream-four"} {...others} />);
}

export default Component;
