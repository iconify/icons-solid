import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s-g0_cb1m.css';
import '../../css/t/t3lan-pvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s-g0_cb1m"/><path class="t3lan-pvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:quarantine-place-self-lockdown-1"} {...others} />);
}

export default Component;
