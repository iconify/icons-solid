import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/nv--uacui.css';
import '../../css/e/ehs91uzyv.css';
import '../../css/h/h90cyib-s.css';
import '../../css/t/tcz8nl_oi.css';
import '../../css/o/o96h81byh.css';
import '../../css/t/tq9fafbhl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="nv--uacui"/><path class="ehs91uzyv"/><path class="h90cyib-s"/><path class="tcz8nl_oi"/><path class="o96h81byh"/><path class="tq9fafbhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:cao-dai"} {...others} />);
}

export default Component;
