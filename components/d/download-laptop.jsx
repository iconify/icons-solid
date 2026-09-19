import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/oyq5l32hv.css';
import '../../css/n/ndtovtbdh.css';
import '../../css/d/dx2uoqbap.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="oyq5l32hv"/><path class="ndtovtbdh"/><path class="dx2uoqbap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:download-laptop"} {...others} />);
}

export default Component;
