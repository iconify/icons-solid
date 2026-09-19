import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bpwqew7kw.css';
import '../../css/q/q18v6hmxv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bpwqew7kw"/><path class="q18v6hmxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:submarine"} {...others} />);
}

export default Component;
