import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/a/a-41mkbyk.css';
import '../../css/x/xi0idpw6x.css';
import '../../css/e/e6nl_9juj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="a-41mkbyk"/><path class="xi0idpw6x"/><path class="e6nl_9juj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:key"} {...others} />);
}

export default Component;
