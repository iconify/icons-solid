import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w--_r6b_t.css';
import '../../css/g/gq0l-nfit.css';
import '../../css/h/hmy4ymk6a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="w--_r6b_t"/><path class="gq0l-nfit"/><path clip-rule="evenodd" class="hmy4ymk6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:wifi"} {...others} />);
}

export default Component;
