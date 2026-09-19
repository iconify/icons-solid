import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b62w8-blj.css';
import '../../css/k/kdtf-mbyl.css';
import '../../css/c/cj23v815o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="b62w8-blj"/><path class="kdtf-mbyl"/><path class="cj23v815o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:stretching-one"} {...others} />);
}

export default Component;
