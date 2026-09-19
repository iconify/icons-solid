import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/n/nmctdqbaq.css';
import '../../css/j/jjitwcc7v.css';
import '../../css/b/bm2e03zbo.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="casyzt9mq"><path class="nmctdqbaq"/><path class="jjitwcc7v"/><path class="bm2e03zbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:storage-card-one"} {...others} />);
}

export default Component;
