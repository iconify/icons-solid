import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0m40jtsp.css';
import '../../css/t/tjes3mbwb.css';
import '../../css/p/pae_c0_fk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g0m40jtsp"/><path class="tjes3mbwb"/><path class="pae_c0_fk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-bus"} {...others} />);
}

export default Component;
