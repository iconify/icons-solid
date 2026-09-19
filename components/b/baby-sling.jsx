import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/w/w370i_-ni.css';
import '../../css/p/pk-427wln.css';
import '../../css/u/ub7r5_brs.css';
import '../../css/t/tsqrdnb5p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="w370i_-ni"/><path class="pk-427wln"/><path class="ub7r5_brs"/><path class="tsqrdnb5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baby-sling"} {...others} />);
}

export default Component;
