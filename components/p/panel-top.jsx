import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/im3rku77o.css';
import '../../css/b/b9okhqcsd.css';
import '../../css/k/k7gti3b7r.css';
import '../../css/o/og437mbap.css';
import '../../css/v/vo2tgh_pu.css';
import '../../css/o/orpx2tbqe.css';
import '../../css/k/k6wr5ehnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="im3rku77o"/><path class="b9okhqcsd"/><path class="k7gti3b7r wm-shine"/><path class="og437mbap"/><path class="vo2tgh_pu"/><path class="orpx2tbqe"/><path class="k6wr5ehnf wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:panel-top"} {...others} />);
}

export default Component;
