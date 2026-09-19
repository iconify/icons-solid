import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnzt_ubit.css';
import '../../css/c/c435is_7m.css';
import '../../css/m/m42cvdv3o.css';
import '../../css/f/f18qcjqug.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qnzt_ubit"/><path class="c435is_7m"/><path class="m42cvdv3o"/><circle class="f18qcjqug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:microscope"} {...others} />);
}

export default Component;
