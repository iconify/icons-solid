import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jra_7pbua.css';
import '../../css/z/z87tfbcrq.css';
import '../../css/y/yzxj7cccj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="jra_7pbua"/><path class="z87tfbcrq"/><path class="yzxj7cccj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:creative"} {...others} />);
}

export default Component;
