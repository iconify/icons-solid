import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0svil7kn.css';
import '../../css/q/qi4e_75le.css';
import '../../css/n/n5uwzf69o.css';
import '../../css/z/z_pn00bgb.css';

const viewBox = {"width":23,"height":24};
const content = `<path class="t0svil7kn"/><path class="qi4e_75le"/><path class="n5uwzf69o"/><path class="z_pn00bgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:passport-alt"} {...others} />);
}

export default Component;
