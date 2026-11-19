import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0bk-h96g.css';
import '../../css/a/adv34uxzq.css';
import '../../css/k/k1x1l-x6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o0bk-h96g"/><path class="adv34uxzq"/><path class="k1x1l-x6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:paycheck-minus"} {...others} />);
}

export default Component;
