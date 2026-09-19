import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/m67mllbtg.css';
import '../../css/b/bzg8--bit.css';
import '../../css/b/bemva3jvi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="m67mllbtg"/><path clip-rule="evenodd" class="bzg8--bit"/><path class="bemva3jvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:printer"} {...others} />);
}

export default Component;
