import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/muvtlrodu.css';
import '../../css/g/gj1w2lbmt.css';
import '../../css/t/tecn4bbqc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="muvtlrodu"/><circle class="gj1w2lbmt"/><path class="tecn4bbqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:doughnut"} {...others} />);
}

export default Component;
