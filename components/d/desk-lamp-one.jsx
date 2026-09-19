import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/n/noua3z6jc.css';
import '../../css/b/b_x93ydzf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="noua3z6jc"/><path class="b_x93ydzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:desk-lamp-one"} {...others} />);
}

export default Component;
