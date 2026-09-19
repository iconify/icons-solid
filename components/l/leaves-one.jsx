import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/g/giovjbbkt.css';
import '../../css/s/sechs05ci.css';
import '../../css/l/lci9jw8ac.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="giovjbbkt"/><path class="sechs05ci"/><path class="lci9jw8ac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:leaves-one"} {...others} />);
}

export default Component;
