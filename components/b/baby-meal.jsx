import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/lrd2eebhv.css';
import '../../css/g/g3df0sqil.css';
import '../../css/z/zpli_odwl.css';
import '../../css/v/vhd0tn8ep.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="lrd2eebhv"/><path class="g3df0sqil"/><path class="zpli_odwl"/><path class="vhd0tn8ep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:baby-meal"} {...others} />);
}

export default Component;
