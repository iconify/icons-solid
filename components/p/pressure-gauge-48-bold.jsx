import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvc4fj9_h.css';
import '../../css/w/wndfuohsw.css';
import '../../css/y/yhk9bj34h.css';
import '../../css/e/ekvf15bga.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lvc4fj9_h"/><path class="wndfuohsw"/><path class="yhk9bj34h"/><path class="ekvf15bga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pressure-gauge-48-bold"} {...others} />);
}

export default Component;
