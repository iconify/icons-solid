import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t79nqfb1n.css';
import '../../css/o/o9pfyqqty.css';
import '../../css/b/bulvyxg5m.css';
import '../../css/w/wf5_z4p1g.css';
import '../../css/e/eqev2dbms.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t79nqfb1n"/><path class="o9pfyqqty"/><path class="bulvyxg5m"/><path class="wf5_z4p1g"/><path class="eqev2dbms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:hand-point-open"} {...others} />);
}

export default Component;
