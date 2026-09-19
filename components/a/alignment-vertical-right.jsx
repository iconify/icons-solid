import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/g/g7stp2buu.css';
import '../../css/c/c512wzfmb.css';
import '../../css/t/tp5uhcb_m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="g7stp2buu"/><path class="c512wzfmb"/><path class="tp5uhcb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alignment-vertical-right"} {...others} />);
}

export default Component;
