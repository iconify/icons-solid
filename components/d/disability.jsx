import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2e9ao-jc.css';
import '../../css/b/b63j0lbqh.css';
import '../../css/j/jq-mwpe1t.css';
import '../../css/o/of3_c0e4k.css';
import '../../css/c/c03b__bwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x2e9ao-jc"/><circle class="b63j0lbqh"/><path class="jq-mwpe1t"/><circle class="of3_c0e4k"/><path class="c03b__bwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:disability"} {...others} />);
}

export default Component;
