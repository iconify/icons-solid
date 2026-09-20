import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/i17sw5brb.css';
import '../../css/h/hr_h5rbvj.css';
import '../../css/j/jnmc_oe0s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="i17sw5brb"/><path class="hr_h5rbvj"/><path class="jnmc_oe0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:one-finger-tap"} {...others} />);
}

export default Component;
