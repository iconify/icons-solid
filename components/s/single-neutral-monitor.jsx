import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hfr7pfbab.css';
import '../../css/a/aqhsheffi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hfr7pfbab"/><path class="aqhsheffi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-neutral-monitor"} {...others} />);
}

export default Component;
