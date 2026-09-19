import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/prjqq_h_g.css';
import '../../css/q/quptsdbge.css';
import '../../css/l/lfsiu7tnm.css';
import '../../css/f/f0j6j6igf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><ellipse class="prjqq_h_g"/><path class="quptsdbge"/><path class="lfsiu7tnm"/><path class="f0j6j6igf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tree-one"} {...others} />);
}

export default Component;
