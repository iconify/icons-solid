import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/n/noua3z6jc.css';
import '../../css/f/f8_02l2vt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="noua3z6jc"/><path class="f8_02l2vt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:desk-lamp-one"} {...others} />);
}

export default Component;
