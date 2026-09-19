import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/cslsnsbdo.css';
import '../../css/d/daj4drb4a.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/h/hh_ficcty.css';
import '../../css/t/tt3n4ibfb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="cslsnsbdo"/><path class="daj4drb4a"/><path class="j9hg1or3h"/><path class="hh_ficcty"/><path class="tt3n4ibfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:church-one"} {...others} />);
}

export default Component;
