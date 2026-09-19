import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x_ct48b7d.css';
import '../../css/x/xl354v--g.css';
import '../../css/j/jqna_5nqw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="x_ct48b7d"/><path class="xl354v--g"/><path class="jqna_5nqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:inbox"} {...others} />);
}

export default Component;
