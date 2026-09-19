import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/a/aym_ncbha.css';
import '../../css/j/jh9i8zb2v.css';
import '../../css/z/zqtd9-8hz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="aym_ncbha"/><path class="jh9i8zb2v"/><path class="zqtd9-8hz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:install"} {...others} />);
}

export default Component;
