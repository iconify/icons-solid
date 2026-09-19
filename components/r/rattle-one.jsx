import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/ofg1alwyk.css';
import '../../css/l/lm8wm8y6h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle transform="rotate(40 29.463 16.989)" class="ofg1alwyk"/><path class="lm8wm8y6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rattle-one"} {...others} />);
}

export default Component;
