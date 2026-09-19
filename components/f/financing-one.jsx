import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/w38ullbcm.css';
import '../../css/c/cjfecbceb.css';
import '../../css/s/szmwbtbmw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="w38ullbcm"/><path class="cjfecbceb"/><path clip-rule="evenodd" class="szmwbtbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:financing-one"} {...others} />);
}

export default Component;
