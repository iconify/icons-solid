import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/c/cdjsa9ogp.css';
import '../../css/b/bu-51_byq.css';
import '../../css/y/yvjmprl1n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="cdjsa9ogp"/><path class="bu-51_byq"/><path class="yvjmprl1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:basketball-clothes"} {...others} />);
}

export default Component;
