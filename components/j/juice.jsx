import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b994on6ok.css';
import '../../css/n/n50kjvxhj.css';
import '../../css/q/qcvonpbgd.css';
import '../../css/h/hlgx7nbpi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="b994on6ok"/><rect class="n50kjvxhj"/><path class="qcvonpbgd"/><path class="hlgx7nbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:juice"} {...others} />);
}

export default Component;
