import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dkdd3n86d.css';
import '../../css/l/lz421kbzw.css';
import '../../css/h/h71q4n6nr.css';
import '../../css/f/fqpodu9zv.css';
import '../../css/s/sy8psqbjp.css';
import '../../css/q/q7n5evbgb.css';
import '../../css/e/e475xk4sh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dkdd3n86d"/><path class="lz421kbzw"/><path class="h71q4n6nr wm-k"/><path class="fqpodu9zv wm-a"/><path class="sy8psqbjp"/><path class="q7n5evbgb"/><path class="e475xk4sh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:paint-roller"} {...others} />);
}

export default Component;
