import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htu5m_cpb.css';
import '../../css/i/iz_fwv24x.css';
import '../../css/u/uwugspbgc.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="htu5m_cpb"/><path class="iz_fwv24x"/><path class="uwugspbgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:circledlatincapitalletterm"} {...others} />);
}

export default Component;
