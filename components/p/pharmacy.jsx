import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4bw41thd.css';
import '../../css/k/kbtrenb5s.css';
import '../../css/d/dqk3scc2o.css';
import '../../css/q/qk90v_uvm.css';
import '../../css/v/vrwte0oxc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="c4bw41thd"/><path clip-rule="evenodd" class="kbtrenb5s"/><path class="dqk3scc2o"/><path class="qk90v_uvm"/><path class="vrwte0oxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:pharmacy"} {...others} />);
}

export default Component;
