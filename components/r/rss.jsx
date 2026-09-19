import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/h/hwhey4boo.css';
import '../../css/y/ytruyta7v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="hwhey4boo"/><path class="ytruyta7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rss"} {...others} />);
}

export default Component;
