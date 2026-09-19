import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/x/xkue7kb9l.css';
import '../../css/k/kwblefs2v.css';
import '../../css/k/kr7nxjbap.css';
import '../../css/l/l_76ujzop.css';
import '../../css/n/n8wk16bbf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><rect class="xkue7kb9l"/><path class="kwblefs2v"/><path class="kr7nxjbap"/><path class="l_76ujzop"/><path class="n8wk16bbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:instruction"} {...others} />);
}

export default Component;
