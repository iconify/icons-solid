import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qdafnbbjj.css';
import '../../css/d/d4vocib6k.css';
import '../../css/z/z37iwiaad.css';
import '../../css/c/c25lkgbgb.css';
import '../../css/c/cu85-qw4a.css';
import '../../css/p/pmf__vb6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qdafnbbjj"/><path class="d4vocib6k"/><path class="z37iwiaad"/><path class="c25lkgbgb"/><path class="cu85-qw4a"/><path class="pmf__vb6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cosmetic-broken"} {...others} />);
}

export default Component;
