import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/y/yar0blewo.css';
import '../../css/u/ulf0ykbta.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="yar0blewo"/><path class="ulf0ykbta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:music-list"} {...others} />);
}

export default Component;
