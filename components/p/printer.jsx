import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mb-pe5b7v.css';
import '../../css/b/bzg8--bit.css';
import '../../css/t/tbnkqnbwe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="mb-pe5b7v"/><path clip-rule="evenodd" class="bzg8--bit"/><path class="tbnkqnbwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:printer"} {...others} />);
}

export default Component;
