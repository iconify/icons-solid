import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/y/ygbplvbei.css';
import '../../css/c/cplpj-rbo.css';
import '../../css/u/uxhzhrb1u.css';
import '../../css/h/hi65sfm0x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ygbplvbei"/><circle class="cplpj-rbo"/><path class="uxhzhrb1u"/><path class="hi65sfm0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:microphone-one"} {...others} />);
}

export default Component;
