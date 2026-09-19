import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/s/sedcd-iki.css';
import '../../css/p/phy2opn8a.css';
import '../../css/a/adk15x0vw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="sedcd-iki"/><path class="phy2opn8a"/><path class="adk15x0vw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:flight-safety"} {...others} />);
}

export default Component;
