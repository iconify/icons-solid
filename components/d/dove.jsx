import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbt28cbiy.css';
import '../../css/k/k14kl3b3g.css';
import '../../css/b/bifxbsbpm.css';
import '../../css/o/o9-b8bd3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qbt28cbiy"/><path class="k14kl3b3g"/><path class="bifxbsbpm"/><path class="o9-b8bd3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dove"} {...others} />);
}

export default Component;
