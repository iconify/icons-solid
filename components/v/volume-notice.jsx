import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/g/gnu-tacti.css';
import '../../css/f/fxm53-wkn.css';
import '../../css/a/a9mxpshxm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="gnu-tacti"/><path class="fxm53-wkn"/><path class="a9mxpshxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:volume-notice"} {...others} />);
}

export default Component;
