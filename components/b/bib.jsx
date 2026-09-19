import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bvsicac_i.css';
import '../../css/k/kfk_307bu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="bvsicac_i"/><path class="kfk_307bu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bib"} {...others} />);
}

export default Component;
