import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rwpjs6wpq.css';
import '../../css/r/r-a91fb-z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="rwpjs6wpq"/><path class="r-a91fb-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:application"} {...others} />);
}

export default Component;
