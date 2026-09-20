import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9pq-abme.css';
import '../../css/o/ofwx60b7x.css';
import '../../css/e/eytqxlbqe.css';
import '../../css/i/in7ym2o-i.css';
import '../../css/w/wf9zrybgq.css';
import '../../css/s/szx8ekasx.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/c/c8ga9xhma.css';
import '../../css/u/u81-gtb2e.css';
import '../../css/m/m15ul5bai.css';
import '../../css/b/bvwbq4bxw.css';
import '../../css/f/fsh74ixvb.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="k9pq-abme"><circle class="ofwx60b7x"/><path class="eytqxlbqe"/></g><path class="in7ym2o-i"/><path class="wf9zrybgq"/><path class="szx8ekasx"/><g class="jn8qy4bru"><path class="c8ga9xhma"/><path class="u81-gtb2e"/><path class="m15ul5bai"/><circle class="bvwbq4bxw"/><path class="fsh74ixvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-rowing-boat-medium-skin-tone"} {...others} />);
}

export default Component;
