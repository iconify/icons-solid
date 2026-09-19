import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/x/x0s0fvb3k.css';
import '../../css/g/gcdj9wvof.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="x0s0fvb3k"/><path class="gcdj9wvof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:leo"} {...others} />);
}

export default Component;
