import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gt-mihb7i.css';
import '../../css/h/hvzd0ubol.css';
import '../../css/l/l4x7erbqx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="gt-mihb7i"/><path class="hvzd0ubol"/><path class="l4x7erbqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mail-unpacking"} {...others} />);
}

export default Component;
