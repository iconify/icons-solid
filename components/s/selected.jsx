import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gu5han_5f.css';
import '../../css/w/wjxv5acdy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="gu5han_5f"/><path class="wjxv5acdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:selected"} {...others} />);
}

export default Component;
