import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/n/nzul_zbqb.css';
import '../../css/t/tsr0sjbtq.css';
import '../../css/u/u41u4768t.css';
import '../../css/l/l0121-nyj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="nzul_zbqb"/><path class="tsr0sjbtq"/><path class="u41u4768t"/><path class="l0121-nyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:people-search"} {...others} />);
}

export default Component;
