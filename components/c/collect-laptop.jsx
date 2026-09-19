import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/usswkqb0n.css';
import '../../css/n/ndtovtbdh.css';
import '../../css/h/h8fjuyx1i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="usswkqb0n"/><path class="ndtovtbdh"/><path class="h8fjuyx1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:collect-laptop"} {...others} />);
}

export default Component;
