import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/c/cq_stlbtf.css';
import '../../css/b/bbo52rblp.css';
import '../../css/w/wram_obqm.css';
import '../../css/x/x9r1-rbtd.css';
import '../../css/c/c5vbqcbte.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="cq_stlbtf"/><path class="bbo52rblp"/><path class="wram_obqm"/><path class="x9r1-rbtd"/><path class="c5vbqcbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baby-meal"} {...others} />);
}

export default Component;
