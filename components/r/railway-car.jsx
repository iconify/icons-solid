import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pihns979h.css';
import '../../css/d/d2eqaabmh.css';
import '../../css/j/jskrk3k6z.css';
import '../../css/z/zwtn__ziy.css';
import '../../css/s/s92mz8bqp.css';
import '../../css/n/ngvgv4bcg.css';
import '../../css/w/wjunmsp1e.css';
import '../../css/j/jdu-xvbey.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="pihns979h"/><path class="d2eqaabmh"/><path class="jskrk3k6z"/><path class="zwtn__ziy"/><path class="s92mz8bqp"/><path class="ngvgv4bcg"/><path class="wjunmsp1e"/><path class="jdu-xvbey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:railway-car"} {...others} />);
}

export default Component;
