import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tmp_4jhgz.css';
import '../../css/i/i1b443bkt.css';
import '../../css/g/gilfwhj-b.css';
import '../../css/y/yjv45b33a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="tmp_4jhgz"/><path class="i1b443bkt"/><path class="gilfwhj-b"/><path class="yjv45b33a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:record"} {...others} />);
}

export default Component;
