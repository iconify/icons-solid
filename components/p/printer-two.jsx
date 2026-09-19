import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/l/l6qnrtb2h.css';
import '../../css/o/o39sc1brf.css';
import '../../css/f/fuxnvvbtt.css';
import '../../css/d/ddq83ybsi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="l6qnrtb2h"/><rect class="o39sc1brf"/><path class="fuxnvvbtt"/><path class="ddq83ybsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:printer-two"} {...others} />);
}

export default Component;
